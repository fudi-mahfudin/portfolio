import { FileUserIcon } from 'lucide-react';

export default function ResumePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 h-[60vh]">
      <FileUserIcon className="size-50 text-muted-foreground" />
      <h1 className="text-3xl font-bold text-muted-foreground">Resume</h1>
    </div>
  );
}
