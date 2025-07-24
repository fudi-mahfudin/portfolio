import { HeartHandshakeIcon } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 h-[60vh]">
      <HeartHandshakeIcon className="size-50 text-muted-foreground" />
      <h1 className="text-3xl font-bold text-muted-foreground">Services</h1>
    </div>
  );
}
