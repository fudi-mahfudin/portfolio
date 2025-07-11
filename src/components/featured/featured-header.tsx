interface Props {
  title: string;
  tag: string;
}

export default function FeaturedHeader({ title, tag }: Props) {
  return (
    <div className="bg-secondary-background flex flex-none flex-nowrap relative p-6 w-full items-center justify-between h-16 border border-border rounded-3xl">
      <p className="text-lg font-medium leading-5 text-primary-foreground truncate">
        {title}
      </p>
      <p className="text-lg font-medium leading-5 font-pixel text-secondary-foreground text-end">
        {tag}
      </p>
    </div>
  );
}
