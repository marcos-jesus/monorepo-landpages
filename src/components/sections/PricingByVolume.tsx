import Reveal from "@/components/ui/Reveal";

const tiers = [
  { qty: "1 a 50 placas", price: "R$ 80,00", highlight: false },
  { qty: "51 a 200 placas", price: "R$ 65,00", highlight: true },
  { qty: "201+ placas", price: "R$ 52,00", highlight: false },
];

export default function PricingByVolume() {
  return (
    <section className="bg-navy1 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-cyan">
            Preço por volume
          </p>
          <h2 className="font-display text-3xl text-white md:text-4xl">
            Quanto mais você produz, menor o custo por placa
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={tier.qty} delay={i * 0.1}>
              <div
                className={`rounded-2xl border p-8 text-center ${
                  tier.highlight
                    ? "border-brand bg-brand"
                    : "border-white/10 bg-navy2"
                }`}
              >
                <p className="text-sm uppercase tracking-wide text-white/80">
                  {tier.qty}
                </p>
                <p className="mt-4 font-display text-3xl text-white">
                  {tier.price}
                </p>
                <p className="mt-1 text-xs text-white/60">por placa</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
