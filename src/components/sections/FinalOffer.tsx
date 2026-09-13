import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const benefits = [
  "Treinamento completo, 6 módulos",
  "Sistema próprio de rotas e vendas",
  "Fornecedor integrado de placas",
  "Comunidade de alunos",
  "Materiais práticos prontos para usar",
  "Acesso vitalício e atualizações",
];

export default function FinalOffer() {
  return (
    <section id="oferta" className="bg-navy1 py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-cyan">
            50% de desconto · primeira turma
          </p>
          <p className="text-lg text-muted line-through">R$ 197,90</p>
          <p className="font-display text-5xl text-white">
            3x R$ 32,60 <span className="text-positive text-2xl">ou R$ 97,90 à vista</span>
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-10 grid gap-3 text-left md:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex gap-2 text-white/90">
                <span className="text-positive">✓</span>
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10">
            <Button href="#">Quero entrar no Estrada NFC PRO</Button>
          </div>
          <p className="mt-4 text-sm text-muted">
            Compra protegida · Garantia de 7 dias
          </p>
        </Reveal>
        <p className="mt-8 text-xs text-muted">
          As placas físicas são compradas separadamente através do fornecedor
          integrado indicado no treinamento.
        </p>
      </div>
    </section>
  );
}
