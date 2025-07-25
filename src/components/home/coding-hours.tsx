import { PROFILE_DATA } from '@/config';
import { ClockIcon } from 'lucide-react';

export default function CodingHours() {
  return (
    <div className="shadow-feature-card flex flex-col gap-6 rounded-xl p-4 lg:p-6">
      <div className="flex items-center gap-2">
        <ClockIcon className="size-[18px]" />
        <h2 className="text-sm">Coding Hours</h2>
      </div>
      <div className="flex-1 flex grow items-center justify-center text-4xl font-semibold">
        {PROFILE_DATA.coding_hours}
        &nbsp;hrs
      </div>
    </div>
  );
}
