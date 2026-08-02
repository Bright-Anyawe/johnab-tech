import type { ReactNode } from "react";

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-7 text-slate-300">
          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className="mt-8 text-xl font-black text-white">{children}</h2>;
}
