import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { withBasePath } from "@/lib/basePath";

export default function LightSection() {
  return (
    <section className="bg-light py-24 text-navy1">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <Reveal>
          <Image
            src={withBasePath("/images/produto.png")}
            alt="Detalhe da placa de avaliação"
            width={640}
            height={480}
            className="w-full rounded-2xl shadow-xl"
          />
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand">
            O produto em 20 segundos
          </p>
          <h2 className="font-display text-3xl md:text-4xl">
            Uma placa no balcão. Um QR Code. Uma avaliação a mais.
          </h2>
          <p className="mt-4 text-navy1/70">
            Entre a compra e a avaliação no Google existe um vácuo: o cliente
            esquece. A placa física com QR Code e NFC resolve isso na hora,
            no balcão, no momento em que a experiência ainda está fresca.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
