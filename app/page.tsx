"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TheShift from "@/components/TheShift";
import WhatIsGeo from "@/components/WhatIsGeo";
import TheFullPicture from "@/components/TheFullPicture";
import HowItWorks from "@/components/HowItWorks";
import Platforms from "@/components/Platforms";
import WhyCamus from "@/components/WhyCamus";
import OurClients from "@/components/OurClients";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import DiagnosisModal from "@/components/DiagnosisModal";
import DeployButton from "@/components/DeployButton";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <main>
      <Nav onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <TheShift />
      <WhatIsGeo />
      <TheFullPicture />
      <HowItWorks />
      <Platforms />
      <OurClients />
      <WhyCamus />
      <FinalCta onOpenModal={openModal} />
      <Footer />
      <DiagnosisModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <DeployButton />
    </main>
  );
}
