"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Reveal from "@/components/ui/Reveal";

const modules = [
  { n: "01", title: "Preparando a operação", img: "/images/modulo-1.webp" },
  { n: "02", title: "A placa perfeita", img: "/images/modulo-2.webp" },
  { n: "03", title: "A rota das primeiras vendas", img: "/images/modulo-3.webp" },
  { n: "04", title: "Do bairro à escala", img: "/images/modulo-4.webp" },
  { n: "05", title: "Comunidade", img: "/images/modulo-5.webp" },
  { n: "06", title: "Central de ferramentas", img: "/images/modulo-6.webp" },
];

export default function ModulesCarousel() {
  const [emblaRef] = useEmblaCarousel({ align: "start", dragFree: true });

  return (
    <section className="bg-navy2b py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-cyan">
            Método Rota NFC
          </p>
          <h2 className="font-display text-3xl text-white md:text-4xl">
            6 módulos, do zero à primeira rota
          </h2>
        </Reveal>
        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {modules.map((m) => (
              <div
                key={m.n}
                className="min-w-[260px] flex-[0_0_260px] rounded-2xl border border-white/10 bg-navy3 p-4"
              >
                <Image
                  src={m.img}
                  alt={m.title}
                  width={260}
                  height={180}
                  className="w-full rounded-xl"
                />
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-cyan">
                  Módulo {m.n}
                </p>
                <p className="mt-1 font-display text-lg text-white">
                  {m.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
