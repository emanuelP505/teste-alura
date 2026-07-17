import { FormEvent, ReactNode } from 'react';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';

interface AuthField {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}

interface AuthFormProps {
  title: string;
  description: string;
  fields: AuthField[];
  ctaText: string;
  onSubmit?: (values: Record<string, string>) => void;
  children?: ReactNode;
}

export function AuthForm({
  title,
  description,
  fields,
  ctaText,
  onSubmit,
  children,
}: AuthFormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries()) as Record<string, string>;
    onSubmit?.(values);
  };

  return (
    <div className="space-y-6 rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-lg shadow-slate-200/40">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {fields.map((field) => (
          <Input
            key={field.id}
            id={field.id}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
          />
        ))}

        <Button type="submit">{ctaText}</Button>
      </form>

      {children}
    </div>
  );
}