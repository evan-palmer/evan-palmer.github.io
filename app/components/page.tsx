import type { ReactNode } from 'react';

import Footer from '~/components/footer';
import Navbar from '~/components/navbar';

export default function Page({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[640px] flex-col px-6 py-16 md:py-20">
      <Navbar />
      <p className="mb-6 text-xs font-semibold tracking-wider text-greyscale-500 uppercase">
        {title}
      </p>
      <div className="flex flex-col gap-4">
        {children}
      </div>
      <Footer />
    </div>
  );
}
