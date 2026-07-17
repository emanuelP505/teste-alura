interface LogoProps {
  src: string;
  alt: string;
}

export function Logo({ src, alt }: LogoProps) {
  return <img src={src} alt={alt} className="h-8 w-8 object-contain" />;
}