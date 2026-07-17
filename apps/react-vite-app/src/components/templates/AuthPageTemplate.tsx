import { ReactNode } from 'react';

interface AuthPageTemplateProps {
  bannerSrc: string;
  heroTitle: string;
  heroSubtitle: string;
  children: ReactNode;
}

export function AuthPageTemplate({
  bannerSrc,
  heroTitle,
  heroSubtitle,
  children,
}: AuthPageTemplateProps) {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center justify-center">
        <div className="grid w-full gap-10 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="order-2 xl:order-1">{children}</div>

          <div className="order-1 xl:order-2">
            <div className="hidden h-full rounded-[40px] bg-slate-950/95 p-6 shadow-2xl shadow-slate-900/20 md:block">
              <img src={bannerSrc} alt="Banner de login" className="h-[520px] w-full rounded-[32px] object-cover" />
              <div className="mt-8 text-white">
                <p className="text-xs uppercase tracking-[0.35em] text-sky-300">Bem-vindo de volta</p>
                <h2 className="mt-4 text-4xl font-semibold">{heroTitle}</h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">{heroSubtitle}</p>
              </div>
            </div>

            <div className="md:hidden rounded-[32px] bg-white p-6 shadow-lg shadow-slate-200/40">
              <img src={bannerSrc} alt="Banner de login" className="h-72 w-full rounded-3xl object-cover" />
              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.35em] text-sky-500">Bem-vindo de volta</p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-900">{heroTitle}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{heroSubtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}