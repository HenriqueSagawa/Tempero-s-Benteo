import { AboutSection } from "./_components/about-section";
import { BenefitsSection } from "./_components/benefits-section";
import { HeroSection } from "./_components/hero-section";
import { ProductsSection } from "./_components/products-section";

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <BenefitsSection />
    </div>
  )
}