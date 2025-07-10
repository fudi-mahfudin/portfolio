import Button from '../ui/button';

interface Props {
  title: string;
  icon: React.ReactNode;
  text: string;
  btnText: string;
}

export default function ContactCard({ title, icon, text, btnText }: Props) {
  return (
    <div
      className="bg-secondary-background border border-border rounded-lg
      overflow-hidden p-3 py-5 xs:pl-5 shadow-md"
    >
      <div className="z-20 flex flex-col gap-8 justify-between items-start">
        {/*Header*/}
        <div className="flex items-center gap-x-2">
          <span className="bg-white w-8 h-8 rounded-lg grid place-items-center">
            {icon}
          </span>
          <h2>{title}</h2>
        </div>
        {/*Body text*/}
        <h1 className="font-bold text-xl xs:text-2xl break-all">{text}</h1>
        <Button className="!w-24" link={`mailto:${text}`}>
          {btnText}
        </Button>
      </div>
    </div>
  );
}
