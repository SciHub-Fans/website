import DonationProgress from "@/components/donation-progress";
import FAQ from "@/components/faq";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Introduce from "@/components/introduce";
import Slogan from "@/components/slogan";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-black text-white">
      <div className="container max-w-[1600px] mx-auto">
        <Header />
        <Hero />
        <Introduce />
        <Slogan />
        <DonationProgress />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
