import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <section className="pt-12">
      {children}
    </section>
  );
}
