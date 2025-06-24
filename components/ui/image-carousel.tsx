import React from "react";
import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

interface ImageCarouselProps {
	images: {
		src: string;
		alt: string;
		caption?: string;
	}[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
	return (
		<div className="w-full max-w-4xl mx-auto my-8">
			<Carousel className="w-full">
				<CarouselContent>
					{images.map((image, index) => (
						<CarouselItem key={index}>
							<div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
								<Image
									src={image.src}
									alt={image.alt}
									fill
									className="object-contain"
								/>
							</div>
							{image.caption && (
								<p className="text-sm text-muted-foreground text-center mt-2 italic">
									{image.caption}
								</p>
							)}
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}
