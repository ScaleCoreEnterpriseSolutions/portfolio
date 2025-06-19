import { ReactNode } from "react";
import Header from "./Header";
import Chatbot from "./Chatbot";
import PageTransition from "./PageTransition";
import LoadingTransition from "./LoadingTransition";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50/20 touch-improvement">
      <LoadingTransition />
      <Header />
      <PageTransition>
        <main className="pt-14 sm:pt-16">{children}</main>
      </PageTransition>
      <Chatbot />
    </div>
  );
};

export default Layout;
