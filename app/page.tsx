import DonationProgress from "@/components/donation-progress";
import FAQ from "@/components/faq";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Introduce from "@/components/introduce";
import Slogan from "@/components/slogan";
import CopyFam from "@/components/copy-fam";
import Disclaimer from "@/components/disclaimer";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-black text-white">
      <div className="container max-w-[1600px] mx-auto bg-[url('/images/index-background.png')] bg-cover bg-center bg-no-repeat bg-fixed">
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
