import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import ProofStrip from "@/components/sections/ProofStrip";
import PricingByVolume from "@/components/sections/PricingByVolume";
import LightSection from "@/components/sections/LightSection";
import Storytelling from "@/components/sections/Storytelling";
import ModulesCarousel from "@/components/sections/ModulesCarousel";
import AudienceFit from "@/components/sections/AudienceFit";
import FinalOffer from "@/components/sections/FinalOffer";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProofStrip />
      <PricingByVolume />
      <LightSection />
      <Storytelling />
      <ModulesCarousel />
      <AudienceFit />
      <FinalOffer />
      <FAQ />
    </>
  );
}
