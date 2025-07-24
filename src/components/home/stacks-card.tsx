import {
  SiCss,
  SiExpress,
  SiGit,
  SiGithubcopilot,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from '@icons-pack/react-simple-icons';
import { Marquee } from '@/components/ui-local/marquee';
import { ZapIcon } from 'lucide-react';

export default function StacksCard() {
  return (
    <div className="shadow-feature-card flex h-60 flex-col gap-2 overflow-hidden rounded-xl p-4 lg:p-6">
      <div className="flex items-center gap-2">
        <ZapIcon className="size-[18px]" />
        <h2 className="text-sm">Stacks</h2>
      </div>
      <Marquee gap="20px" className="py-4" fade pauseOnHover>
        <SiHtml5 className="size-10" />
        <SiCss className="size-10" />
        <SiJavascript className="size-10" />
        <SiTypescript className="size-10" />
        <SiNextdotjs className="size-10" />
        <SiReact className="size-10" />
        <SiNodedotjs className="size-10" />
        <SiLaravel className="size-10" />
      </Marquee>
      <Marquee gap="20px" className="py-4" reverse fade pauseOnHover>
        <SiTailwindcss className="size-10" />
        <SiPostgresql className="size-10" />
        <SiMysql className="size-10" />
        <SiMongodb className="size-10" />
        <SiGit className="size-10" />
        <SiGithubcopilot className="size-10" />
        <SiRedux className="size-10" />
        <SiExpress className="size-10" />
      </Marquee>
    </div>
  );
}
