"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";

const clients = [
  { name: "Client 6",  src: "/logos/Frame 6.png" },
  { name: "Client 7",  src: "/logos/Frame 7.png" },
  { name: "Client 8",  src: "/logos/Frame 8.png" },
  { name: "Client 9",  src: "/logos/Frame 9.png" },
  { name: "Client 10", src: "/logos/Frame 10.png" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

function ClientCell({ client, index }: { client: typeof clients[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const isLast = index === clients.length - 1;

  return (
    <motion.div
      custom={index + 1}
      variants={fadeUp}
      className="flex items-center justify-center cursor-default"
      style={{
        padding: "12px 16px",
        backgroundColor: hovered ? "var(--color-bg-elevated)" : "var(--color-bg-card)",
        borderRight: !isLast ? "1px solid var(--color-border)" : "none",
        transition: "background-color 0.2s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ position: "relative", width: "100%", height: "44px" }}>
        <Image
          src={client.src}
          alt={client.name}
          fill
          className="object-contain"
          style={{
            filter: hovered ? "none" : "grayscale(1)",
            opacity: hovered ? 1 : 0.5,
            transition: "opacity 0.3s ease, filter 0.3s ease",
          }}
          unoptimized
        />
      </div>
    </motion.div>
  );
}

export default function OurClients() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="clients"
      ref={ref}
      className="py-24"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-14"
        >
          <SectionLabel className="mb-4">Our Clients</SectionLabel>
          <SectionTitle
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", maxWidth: "28ch" }}
          >
            Trusted by brands shaping the AI era.
          </SectionTitle>
        </motion.div>

        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-5"
          style={{
            border: "1px solid var(--color-border)",
            borderRadius: "1rem",
            overflow: "hidden",
          }}
        >
          {clients.map((client, i) => (
            <ClientCell key={client.src} client={client} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
