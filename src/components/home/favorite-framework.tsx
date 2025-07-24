import { SiNextdotjs } from "@icons-pack/react-simple-icons";
import { HeartIcon } from "lucide-react";

export default function FavoriteFramework() {
  return (
    <div className='shadow-feature-card flex flex-col gap-6 rounded-xl p-4 lg:p-6'>
      <div className='flex items-center gap-2'>
        <HeartIcon className='size-[18px]' />
        <h2 className='text-sm'>Fav. framework</h2>
      </div>
      <div className='flex items-center justify-center'>
        <SiNextdotjs size={80} className='text-zinc-800 dark:text-zinc-200' />
      </div>
    </div>
  )
}