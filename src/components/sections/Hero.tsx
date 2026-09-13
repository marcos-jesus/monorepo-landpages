import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { withBasePath } from "@/lib/basePath";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-bg pt-20 pb-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(7,95,255,0.35), transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <Reveal>
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-cyan">
            Operação real · Treinamento completo
          </p>
          <h1 className="font-display text-4xl leading-tight text-white md:text-6xl">
            Da placa à primeira rota de vendas
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted">
            Aprenda a preparar, configurar e vender placas de avaliação com
            QR Code e NFC, do zero até a primeira rota de clientes.
          </p>
          <div className="mt-8">
            <Button href="#oferta">Quero entrar no Wendel Peterson</Button>
          </div>
          <p className="mt-6 text-sm text-muted">
            Treinamento vitalício · Garantia de 7 dias · Primeira turma
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="rounded-2xl border border-white/10 bg-navy2 p-6">
            <Image
              src={withBasePath("/images/produto.png")}
              alt="Placa de avaliação com QR Code e NFC"
              width={640}
              height={480}
              className="w-full rounded-xl"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
