import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Hero } from "@/sections/Hero";
import { Pilares } from "@/sections/Pilares";
import { EnfoqueYServicios } from "@/sections/EnfoqueYServicios";
import { SobreMiPreview } from "@/sections/SobreMiPreview";
import { HomoSapiens } from "@/sections/HomoSapiens";
import { CTA } from "@/sections/CTA";
import { ContactoSection } from "@/sections/ContactoSection";

export default function Page() {
  return (
    <>
      <PageLoader />
      <div className="relative min-h-screen bg-[#F5F2EC] text-[#10253F] selection:bg-[#C8A46A]/20 selection:text-[#10253F]">
        <Navbar />
        <main>
          <Hero />
          <Pilares />
          <EnfoqueYServicios />
          <SobreMiPreview />
          <HomoSapiens />
          <CTA />
          <ContactoSection />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </>
  );
}
