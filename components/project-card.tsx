"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectModal } from "@/components/project-modal"

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  tags: string[]
  link: string
  moreInfo?: string
}

export function ProjectCard({ title, description, imageSrc, tags, link, moreInfo }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
    // Add a class to the body to prevent scrolling when modal is open
    document.body.classList.add('overflow-hidden')
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    // Remove the class when modal is closed
    document.body.classList.remove('overflow-hidden')
  }

  return (
    <>
      <div 
        className="text-start cursor-pointer group mb-2 hover:-translate-y-1 transition-transform duration-300 ease-out" 
        onClick={handleOpenModal}
      >
        <div className="relative aspect-[2] mb-4">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            style={{ backgroundSize: "cont" }}
            fill
            className="object-cover transition-all duration-200 group-hover:border-black/30 dark:group-hover:border-white/30 rounded-xl border size-fit"
          />
        </div>
        
        <CardTitle className="mb-1">{title}</CardTitle>
      
        <p className="text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        project={{ title, description, imageSrc, tags, link, moreInfo }}
      />
    </>
  )
}
