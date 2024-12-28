import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scihub Store",
  description: "Scihub Peripheral Mall",
};

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default StoreLayout;
