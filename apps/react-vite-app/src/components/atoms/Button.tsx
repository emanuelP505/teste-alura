import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const base = 'w-full rounded-xl px-4 py-3 text-sm font-semibold transition';
  const variants =
    variant === 'secondary'
      ? 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
      : 'bg-slate-900 text-white hover:bg-slate-800';

  return (
    <button className={`${base} ${variants} ${className}`} {...props}>
      {children}
    </button>
  );
}