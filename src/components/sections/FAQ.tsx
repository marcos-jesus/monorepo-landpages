"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const faqs = [
  {
    q: "Preciso entender de tecnologia?",
    a: "Não. O sistema de placas com QR Code e NFC já vem pronto para configurar — o treinamento mostra o passo a passo.",
  },
  {
    q: "Preciso ter experiência com vendas?",
    a: "Não. O método ensina um roteiro de abordagem simples para comerciantes locais, mesmo sem experiência prévia.",
  },
  {
    q: "As placas estão incluídas?",
    a: "Não. O treinamento ensina a operação completa; as placas são compradas à parte com o fornecedor integrado indicado.",
  },
  {
    q: "Onde compro as placas?",
    a: "Você recebe acesso a um fornecedor integrado dentro da plataforma, com preços por volume.",
  },
  {
    q: "É renda garantida?",
    a: "Não. Os resultados dependem da execução individual — o treinamento entrega o método, não uma garantia de renda.",
  },
  {
    q: "Como funciona a garantia?",
    a: "Você tem 7 dias após a compra para pedir reembolso integral caso o conteúdo não seja para você.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-bg py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <h2 className="font-display text-3xl text-white md:text-4xl">
            Perguntas frequentes
          </h2>
        </Reveal>
        <div className="mt-10 divide-y divide-white/10">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="py-5">
                <button
                  className="flex w-full items-center justify-between text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg text-white">
                    {item.q}
                  </span>
                  <span className="text-2xl text-cyan" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-muted">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
