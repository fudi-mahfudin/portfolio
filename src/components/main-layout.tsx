import Image from 'next/image';
import Header from './layout/header';
import Footer from './layout/footer';
import background from '@/../public/images/gradient-background-top.png';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main
        id="skip-nav"
        className="mx-auto mb-16 w-full max-w-5xl flex-1 sm:px-8 px-4 py-24"
      >
        {children}
      </main>
      <Footer />
      <Image
        width={1512}
        height={550}
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
        src={background}
        alt=""
        role="presentation"
        priority
      />
      <Image
        width={1512}
        height={550}
        className="absolute left-1/2 -bottom-6 -z-10 -translate-x-1/2 rotate-180"
        src={background}
        alt=""
        role="presentation"
        priority
      />
    </>
  );
}
