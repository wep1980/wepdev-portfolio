type PropriedadesTag = {
  children: string;
};

export function Tag({ children }: PropriedadesTag) {
  return <span className="font-mono text-[0.72rem] leading-5 text-subtle">{children}</span>;
}
