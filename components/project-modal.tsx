"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ExternalLink, X } from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    imageSrc: string
    tags: string[]
    link: string
  } | null
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null

  useEffect(() => {
    if (isOpen) {
      document.getElementById("corpse")!.classList.add("scale-[95%]") 
    } else {
      document.getElementById("corpse")!.classList.remove("scale-[95%]")
    }
  })

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent 
        side="bottom" 
        className="h-[85vh] max-w-3xl mx-auto rounded-t-3xl overflow-y-auto backdrop-blur-sm"
        // Custom animation classes
        style={{
          transform: isOpen ? "translateY(0) scale(1)" : "translateY(100%) scale(0.95)",
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          opacity: isOpen ? 1 : 0,
          backdropFilter: "blur(8px)"
        }}
      >
        <SheetHeader className="relative pb-6">
          <button 
            onClick={onClose}
            className="absolute right-0 top-0 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <SheetTitle className="text-2xl font-bold">{project.title}</SheetTitle>
          <SheetDescription>{project.description}</SheetDescription>
        </SheetHeader>
        
        <div className="space-y-6">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border">
            <Image
              src={project.imageSrc || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="prose max-w-none">
            <h3>Project Details</h3>
            <p>
              This is where you would include more detailed information about the project,
              such as the challenges faced, solutions implemented, and outcomes achieved.
            </p>
            
            <h3>Technologies Used</h3>
            <p>
              Elaborate on the technologies, frameworks, and tools used in this project
              and why they were chosen.
            </p>
          </div>
          
          <div className="flex justify-end pt-4">
            <Button asChild>
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                View Project <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}