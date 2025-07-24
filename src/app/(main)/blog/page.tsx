import { PencilIcon } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 h-[60vh]">
      <PencilIcon className="size-50 text-muted-foreground" />
      <h1 className="text-3xl font-bold text-muted-foreground">Blog</h1>
    </div>
  );
}
