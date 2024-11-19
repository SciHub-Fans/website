import DonationProgress from "@/components/donation-progress";
import FAQ from "@/components/faq";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Introduce from "@/components/introduce";
import Slogan from "@/components/slogan";
import CopyFam from "@/components/copy-fam";
import Disclaimer from "@/components/disclaimer";
import { MatrixRain } from "@/components/animata/MatrixRain";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-black text-white">
      <MatrixRain />
      <div className="relative z-1">
        <Header />
        <Hero />
        <Disclaimer />
        <Introduce />
        <Slogan />
        <DonationProgress />
        <CopyFam />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
