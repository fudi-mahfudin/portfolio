import { forwardRef, ReactNode } from 'react';

// forwardRef input
interface InputProps {
  placeholder: string;
  icon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, placeholder, ...props }, ref) => {
    return (
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          {icon}
        </div>
        <input
          ref={ref}
          {...props}
          placeholder={placeholder}
          className="bg-primary-background text-primary-foreground w-full rounded-lg text-sm ps-10 px-2.5 py-4 focus:outline-none"
        />
      </div>
    );
  }
);

export default Input;
