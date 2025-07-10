import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Timeline({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-y-6">{children}</div>;
}

interface Props {
  date: string;
  title: string;
  subTitle: string;
  link?: string;
  tag?: string;
  isCourse?: boolean;
}

export function TimelineItem({
  date,
  title,
  subTitle,
  link,
  tag,
  isCourse,
}: Props) {
  return (
    <div className="flex flex-wrap gap-12 min-h justify-start relative">
      {/*Date timeline*/}
      <div
        className="h-auto flex-none break-words  whitespace-pre"
        style={{ width: `${isCourse ? '0' : ''}` }}
      >
        <p className="text-secondary-foreground">{date}</p>
      </div>
      {/*Right side*/}
      <div
        className="flex gap-x-2 flex-1"
        style={{ transform: `${isCourse ? 'translateX(-45px)' : ''}` }}
      >
        <div className="flex flex-col gap-0.5">
          {/*Title*/}
          <div className="text-primary-foreground break-words whitespace-pre">
            <p className="leading-6 font-medium text-sm">{title}</p>
          </div>
          {/*Subtitle*/}
          <div className="flex items-center gap-2">
            {link ? (
              <Link href={link} target="_blank">
                <Body link={link} subTitle={subTitle} tag={tag} />
              </Link>
            ) : (
              <Body subTitle={subTitle} tag={tag} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Body({
  link,
  subTitle,
  tag,
}: {
  subTitle: string;
  link?: string;
  tag?: string;
}) {
  return (
    <div className="text-secondary-foreground flex items-center">
      <p className="text-sm font-normal leading-6 mt-1">{subTitle}</p>
      {link ? <FiArrowUpRight /> : null}
      {tag ? (
        <div className="ms-2 rounded-[20px] bg-white/5 py-0.5 px-1.5">
          <p className="text-[10px] font-normal  text-secondary-foreground">
            {tag}
          </p>
        </div>
      ) : null}
    </div>
  );
}
