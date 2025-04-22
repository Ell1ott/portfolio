import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  tags: string[]
  link: string
}

export function ProjectCard({ title, description, imageSrc, tags, link }: ProjectCardProps) {
  return (
    <div className="text-start cursor-pointer  group mb-2 hover:-translate-y-1 transition-transform duration-300 ease-out" >
      <div className="relative aspect-[2] mb-4">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-all duration-200 group-hover:border-black/30 rounded-xl border"
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
  )
}
