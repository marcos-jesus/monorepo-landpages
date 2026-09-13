"use client";

import CountUp from "react-countup";
import Reveal from "@/components/ui/Reveal";

const stats = [
  { end: 10, prefix: "R$", suffix: " mil", label: "em faturamento bruto (10 dias)" },
  { end: 500, prefix: "+", suffix: "", label: "placas produzidas e vendidas" },
  { end: 1.4, prefix: "+", suffix: " milhões", label: "visualizações", decimals: 1 },
];

export default function ProofStrip() {
  return (
    <section className="bg-brand py-14">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 text-center md:grid-cols-3">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1}>
            <div className="border-white/20 md:border-l md:first:border-l-0 md:px-6">
              <p className="font-display text-4xl text-white md:text-5xl">
                {stat.prefix}
                <CountUp
                  end={stat.end}
                  decimals={stat.decimals ?? 0}
                  duration={1.6}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {stat.suffix}
              </p>
              <p className="mt-2 text-sm text-white/80">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-10 text-center text-xs text-white/60">
        Resultados individuais, não representam garantia de desempenho.
      </p>
    </section>
  );
}
