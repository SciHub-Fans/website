import DonationProgress from "@/components/donation-progress";
import FAQ from "@/components/faq";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Introduce from "@/components/introduce";
import Slogan from "@/components/slogan";
import CopyFam from "@/components/copy-fam";
import Disclaimer from "@/components/disclaimer";
import Support from "@/components/support";

export default function Home() {
  return (
    <div className="relative z-1">
      <Header />
      <Hero />
      <Disclaimer />
      <Introduce />
      <Slogan />
      <Support />
      <DonationProgress />
      <CopyFam />
      <FAQ />
      <Footer />
    </div>
  );
}
