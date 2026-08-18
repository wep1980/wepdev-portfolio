type PropriedadesLogoWEPDev = {
  className?: string;
};

export function LogoWEPDev({ className }: PropriedadesLogoWEPDev) {
  return (
    <span aria-hidden="true" className={`inline-flex items-center gap-1.5 ${className ?? ""}`}>
      <span className="text-sinal">
        &gt;<span className="animate-pisca">_</span>
      </span>
      <span>
        Wep<span className="text-primary">Dev</span>
      </span>
    </span>
  );
}
