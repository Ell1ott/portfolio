"use client";
// @ts-nocheck

import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import {
	useGLTF,
	useTexture,
	Environment,
	Lightformer,
	Text,
	Svg,
} from "@react-three/drei";
import {
	BallCollider,
	CuboidCollider,
	Physics,
	RigidBody,
	useRopeJoint,
	useSphericalJoint,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { useControls } from "leva";
import { useTheme } from "next-themes";

extend({ MeshLineGeometry, MeshLineMaterial });
useGLTF.preload("/fullpfp.glb");
useTexture.preload("/band.png");

export function IdBadge() {
	const canvasRef = useRef();
	const [infront, setInfront] = useState(false);
	const [fov, setFov] = useState(25);
	const fovRef = useRef(100);

	const { theme } = useTheme();

	console.log(theme);

	useEffect(() => {
		const updateFov = () => {
			const height = window.innerHeight;
			const width = window.innerWidth;
			const baseFov = 25;
			const minFov = 20;
			const maxFov = 30;
			const newFov =
				(baseFov * (height / Math.min(width, 1000))) / 2 + baseFov / 2;
			console.log(newFov, height);
			if (canvasRef.current) {
				console.log(canvasRef.current);
				canvasRef.current.camera.fov = newFov;
				canvasRef.current.camera.position.x =
					-1.25 + (height - Math.min(width, 1000) * 1.2) / 1000;
				console.log(height, width);
				canvasRef.current.camera.updateProjectionMatrix();
			}
		};

		updateFov();
		window.addEventListener("resize", updateFov);
		return () => window.removeEventListener("resize", updateFov);
	}, []);

	return (
		<Canvas
			dpr={[1, 2]}
			camera={{ position: [-1.5, -0.5, 11], fov: 25, rotation: [0, 0, 0] }}
			gl={{ alpha: true }}
			style={{ position: "absolute", zIndex: infront ? 21 : 10 }}
			onCreated={(s) => (canvasRef.current = s)}
			id="id-badge"
		>
			<ambientLight intensity={Math.PI} />
			<Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
				<Band setInfront={setInfront} />
			</Physics>
			<Environment blur={2}>
				<color
					attach="environment"
					args={[theme == "light" ? "#FAFAFA" : "blue"]}
				/>
				{/* Removed the white background color */}

				<group>
					<Lightformer
						intensity={3}
						color="white"
						position={[0, -1, 5]}
						rotation={[0, 0, Math.PI / 3]}
						scale={[100, 0.1, 1]}
					/>
					<Lightformer
						intensity={4.5}
						color="white"
						position={[-1, -1, 1]}
						rotation={[0, 0, Math.PI / 3]}
						scale={[100, 0.1, 1]}
					/>
					<Lightformer
						intensity={5}
						color="white"
						position={[1, 1, 1]}
						rotation={[0, 0, Math.PI / 3]}
						scale={[100, 0.1, 1]}
					/>
					<Lightformer
						intensity={theme == "light" ? 20 : 10}
						color="white"
						position={[-10, 0, 14]}
						rotation={[0, Math.PI / 2, Math.PI / 3]}
						scale={[100, 10, 1]}
					/>
				</group>
			</Environment>
		</Canvas>
	);
}

function Band({ setInfront, maxSpeed = 50, minSpeed = 10 }) {
	const band = useRef(), fixed = useRef(), j1 = useRef(), j2 = useRef(), j3 = useRef(), card = useRef() // prettier-ignore
	const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3() // prettier-ignore
	const segmentProps = {
		type: "dynamic",
		canSleep: true,
		colliders: false,
		angularDamping: 2,
		linearDamping: 2,
	};
	const { nodes, materials } = useGLTF("/fullpfp.glb");
	console.log(materials);
	const texture = useTexture("/band.png");
	const { width, height } = useThree((state) => state.size);
	const [curve] = useState(
		() =>
			new THREE.CatmullRomCurve3([
				new THREE.Vector3(),
				new THREE.Vector3(),
				new THREE.Vector3(),
				new THREE.Vector3(),
			])
	);
	const [dragged, drag] = useState(false);
	const [hovered, hover] = useState(false);

	useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
	useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
	useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
	useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]]) // prettier-ignore

	useEffect(() => {
		if (hovered) {
			document.body.style.cursor = dragged ? "grabbing" : "grab";
			return () => void (document.body.style.cursor = "auto");
		}
	}, [hovered, dragged]);

	useFrame((state, delta) => {
		if (dragged) {
			vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
			dir.copy(vec).sub(state.camera.position).normalize();
			vec.add(dir.multiplyScalar(state.camera.position.length() * 0.9));
			[card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
			card.current?.setNextKinematicTranslation({
				x: vec.x - dragged.x,
				y: vec.y - dragged.y,
				z: vec.z - dragged.z,
			});
		}
		if (fixed.current) {
			// Fix most of the jitter when over pulling the card
			[j1, j2].forEach((ref) => {
				if (!ref.current.lerped)
					ref.current.lerped = new THREE.Vector3().copy(
						ref.current.translation()
					);
				const clampedDistance = Math.max(
					0.1,
					Math.min(1, ref.current.lerped.distanceTo(ref.current.translation()))
				);
				ref.current.lerped.lerp(
					ref.current.translation(),
					delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
				);
			});
			// Calculate catmul curve

			curve.points[0].copy(j3.current.translation());
			curve.points[1].copy(j2.current.lerped);
			curve.points[2].copy(j1.current.lerped);
			curve.points[3].copy(fixed.current.translation());
			const points = curve.getPoints(32);
			band.current.geometry.setPoints(
				[
					new THREE.Vector3().copy(
						points[0].add(new THREE.Vector3(0, -0.01, 0))
					),
					...points,
				],
				(p) => (p < 0.05 ? 0 : 1)
			);
			setInfront(card.current.translation().x < -0.25);

			// Tilt it back towards the screen
			ang.copy(card.current.angvel());
			rot.copy(card.current.rotation());
			card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
		}
	});

	curve.curveType = "chordal";
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

	const options = {
		hour: "numeric",
		minute: "2-digit",
		hour12: true,
		timeZone: "America/Los_Angeles",
	};

	const [nzTime, setNzTime] = useState(
		new Intl.DateTimeFormat("en-NZ", options).format(new Date())
	);

	useEffect(() => {
		const timer = setInterval(() => {
			setNzTime(new Intl.DateTimeFormat("en-NZ", options).format(new Date()));
		}, 1000);
		return () => clearInterval(timer);
	}, []);
	return (
		<>
			<group position={[0, 4, 0]}>
				<RigidBody ref={fixed} {...segmentProps} type="fixed" />
				<RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
					<BallCollider args={[0.1]} />
				</RigidBody>
				<RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
					<BallCollider args={[0.1]} />
				</RigidBody>
				<RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
					<BallCollider args={[0.1]} />
				</RigidBody>
				<RigidBody
					position={[2, 0, 0]}
					ref={card}
					{...segmentProps}
					type={dragged ? "kinematicPosition" : "dynamic"}
				>
					<CuboidCollider args={[0.8, 1.125, 0.01]} />
					<group
						scale={2.25}
						position={[0, -1.2, -0.05]}
						onPointerOver={() => hover(true)}
						onPointerOut={() => hover(false)}
						onPointerUp={(e) => (
							e.target.releasePointerCapture(e.pointerId), drag(false)
						)}
						onPointerDown={(e) => (
							e.target.setPointerCapture(e.pointerId),
							drag(
								new THREE.Vector3()
									.copy(e.point)
									.sub(vec.copy(card.current.translation()))
							)
						)}
					>
						<mesh geometry={nodes.card.geometry}>
							<meshPhysicalMaterial
								map={materials.base.map}
								alphaTest={0.9}
								map-anisotropy={16}
								clearcoat={1}
								clearcoatRoughness={0.15}
								roughness={0.3}
								metalness={0.5}
							/>
						</mesh>
						<mesh
							geometry={nodes.clip.geometry}
							material={materials.metal}
							material-roughness={0.3}
						/>
						<mesh geometry={nodes.clamp.geometry} material={materials.metal} />
						<group position={[0, 0, 0.01]}>
							<Svg
								position={[-0.31, 0.055, 0]}
								scale={0.0012}
								src={"clock.svg"}
								anchorY="middle"
								anchorX="end"
							></Svg>

							<Text
								position={[-0.265, 0.041, 0]}
								fontSize={0.03}
								color="#000000"
								fillOpacity={0.6}
								anchorX="start"
								anchorY="middle"
								font="Space_Mono/SpaceMono-Regular.ttf"
							>
								{nzTime}
							</Text>
						</group>
						<group position={[0.21, 0, 0.01]}>
							<Svg
								position={[-0.31, 0.055, 0]}
								scale={0.0012}
								src={"pin.svg"}
								anchorY="middle"
								anchorX="end"
								fillMaterial={{ color: "#0000FF" }}
							></Svg>

							<Text
								position={[-0.265, 0.041, 0]}
								fontSize={0.03}
								color="#000000"
								fillOpacity={0.6}
								anchorX="start"
								anchorY="middle"
								font="Space_Mono/SpaceMono-Regular.ttf"
							>
								San Francisco
							</Text>
						</group>
					</group>
				</RigidBody>
			</group>
			<mesh ref={band}>
				<meshLineGeometry />
				<meshLineMaterial
					color="white"
					depthTest={false}
					resolution={[width, height]}
					useMap
					map={texture}
					repeat={[-3, 1]}
					lineWidth={1}
				/>
			</mesh>
		</>
	);
}
