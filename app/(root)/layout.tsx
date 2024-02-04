import { ReactNode } from "react";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import { MyThemeContextProvider } from "@/contexts/ThemeContext";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <MyThemeContextProvider>
      <div className={`flex flex-col items-center dark:bg-main-dark`}>
        <Header />
        <main className="flex-1 inner-wrapper mt-0 mb-[130px] xl:mt-[70px]">
          {children}
        </main>
        <Footer />
      </div>
    </MyThemeContextProvider>
  );
}
