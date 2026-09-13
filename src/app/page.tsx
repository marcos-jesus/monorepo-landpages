import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import ProofStrip from "@/components/sections/ProofStrip";
import PricingByVolume from "@/components/sections/PricingByVolume";
import LightSection from "@/components/sections/LightSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProofStrip />
      <PricingByVolume />
      <LightSection />
    </>
  );
}
