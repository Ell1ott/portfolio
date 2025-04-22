export function Timeline() {
  return (
    <div className="space-y-8">
      <div className="relative pl-8 pb-4">
        <div className="absolute left-0 top-0 h-full w-[2px] bg-muted-foreground/20">
          <div className="absolute left-[-5px] top-0 h-3 w-3 rounded-full bg-primary" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Shark Tank Success</h3>
          <p className="text-sm text-muted-foreground">2023</p>
          <p>
            Appeared on Shark Tank Season 12 and secured a $500,000 investment for 10% equity in my tech startup from
            Mark Cuban and Lori Greiner.
          </p>
        </div>
      </div>
      <div className="relative pl-8 pb-4">
        <div className="absolute left-0 top-0 h-full w-[2px] bg-muted-foreground/20">
          <div className="absolute left-[-5px] top-0 h-3 w-3 rounded-full bg-primary" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Forbes 30 Under 30</h3>
          <p className="text-sm text-muted-foreground">2022</p>
          <p>
            Recognized in the Forbes 30 Under 30 list in the Technology category for innovations in accessibility
            technology.
          </p>
        </div>
      </div>
      <div className="relative pl-8 pb-4">
        <div className="absolute left-0 top-0 h-full w-[2px] bg-muted-foreground/20">
          <div className="absolute left-[-5px] top-0 h-3 w-3 rounded-full bg-primary" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold">TechCrunch Disrupt Finalist</h3>
          <p className="text-sm text-muted-foreground">2021</p>
          <p>
            Selected as a finalist at TechCrunch Disrupt for presenting an innovative solution to digital accessibility
            challenges.
          </p>
        </div>
      </div>
      <div className="relative pl-8">
        <div className="absolute left-0 top-0 h-full w-[2px] bg-muted-foreground/20">
          <div className="absolute left-[-5px] top-0 h-3 w-3 rounded-full bg-primary" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Innovation Award</h3>
          <p className="text-sm text-muted-foreground">2020</p>
          <p>
            Received the Technology Innovation Award at the Global Tech Summit for contributions to open-source
            development.
          </p>
        </div>
      </div>
    </div>
  )
}
