import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Hero } from "@/sections/Hero";
import { Sintomas } from "@/sections/Sintomas";
import { ComoAyudo } from "@/sections/ComoAyudo";
import { CuandoBuscarAyuda } from "@/sections/CuandoBuscarAyuda";
import { SobreMiPreview } from "@/sections/SobreMiPreview";
import { PrimeraConsulta } from "@/sections/PrimeraConsulta";
import { CTA } from "@/sections/CTA";
import { FilosofiaBanner } from "@/sections/FilosofiaBanner";

export default function Page() {
  return (
    <>
      <PageLoader />
      <div className="relative min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <FilosofiaBanner />
          <Sintomas />
          <ComoAyudo />
          <CuandoBuscarAyuda />
          <SobreMiPreview />
          <PrimeraConsulta />
          <CTA />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </>
  );
}
