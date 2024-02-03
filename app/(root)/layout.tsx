import { ReactNode } from "react";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col items-center">
      <Header />
      <main className="flex-1 inner-wrapper mt-0 mb-[130px] xl:mt-[70px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
