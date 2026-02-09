import { ReactNode } from 'react';

interface SectionLayoutProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionLayout({ id, children, className = '' }: SectionLayoutProps) {
  return (
    <section id={id} className={`py-16 md:py-24 lg:py-32 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
