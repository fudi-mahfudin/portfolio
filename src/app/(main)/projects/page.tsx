import { FlameIcon } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 h-[60vh]">
      <FlameIcon className="size-50 text-muted-foreground" />
      <h1 className="text-3xl font-bold text-muted-foreground">Projects</h1>
    </div>
  )
}