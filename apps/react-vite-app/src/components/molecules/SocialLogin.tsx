import { Logo } from '../atoms/Logo';

const socialButtons = [
  { src: '/github.png', alt: 'GitHub', label: 'Entrar com GitHub' },
  { src: '/gmail.png', alt: 'Gmail', label: 'Entrar com Google' },
];

export function SocialLogin() {
  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-500">Ou continue com</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {socialButtons.map(({ src, alt, label }) => (
          <button
            key={alt}
            type="button"
            className="flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            <Logo src={src} alt={alt} />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}