import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ImSpinner2 } from 'react-icons/im';

interface Props {
  children: React.ReactNode;
  link?: string;
  isIcon?: boolean;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  loading?: boolean;
  onClick?: () => void;
}

export default function Button({ children, className, link, isIcon, type, loading, onClick }: Props) {
  return (
    <>
      {link ? (
        <Link href={link} className="cursor-pointer" target='_blank'>
          <ButtonBody className={className} isIcon={isIcon}>
            {children}
          </ButtonBody>
        </Link>
      ) : (
        <button type={type} disabled={loading} onClick={onClick}>
          <ButtonBody className={className} isIcon={isIcon} loading={loading}>
            {children}
          </ButtonBody>
        </button>
      )}
    </>
  );
}

function ButtonBody({ children, className, isIcon, loading }: Props) {
  return (
    <span className="cursor-pointer flex-none w-auto h-full">
      <span
        className={cn(
          'flex items-center justify-center gap-2 bg-white/20 rounded-full select-none whitespace-nowrap text-primary-foreground text-sm font-medium hover:bg-white/40 hover:scale-110 transition-all duration-100',
          className,
          isIcon ? 'size-10' : 'w-max h-full px-3 py-2'
        )}
      >
        {loading ? (
          <ImSpinner2 className="animate-spin text-blue-hera" />
        ) : (
          children
        )}
      </span>
    </span>
  );
}
