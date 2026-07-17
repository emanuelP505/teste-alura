import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export function Input({ label, id, ...props }: InputProps) {
  return (
    <label className="block text-sm text-slate-700">
      <span className="mb-2 block font-medium">{label}</span>
      <input
        id={id}
        name={id}
        className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-100"
        {...props}
      />
    </label>
  );
}