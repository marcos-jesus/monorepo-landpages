import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function Storytelling() {
  return (
    <section className="bg-bg py-24">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-[auto_1fr] md:items-start">
        <Reveal>
          <Image
            src="/images/pessoa.webp"
            alt="Fundador do Estrada NFC PRO"
            width={120}
            height={120}
            className="rounded-full border border-white/10"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-cyan">
            Primeiro a rua. Depois o curso.
          </p>
          <blockquote className="border-l-2 border-brand pl-6 font-display text-2xl italic text-white md:text-3xl">
            &ldquo;Testei essa operação na prática, rua por rua, antes de
            transformar num método replicável.&rdquo;
          </blockquote>
          <p className="mt-6 max-w-xl text-muted">
            Cada etapa do treinamento nasceu de um problema real resolvido em
            campo — não de uma teoria de vendas genérica.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
