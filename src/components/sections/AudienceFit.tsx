import Reveal from "@/components/ui/Reveal";

const fit = [
  "Disposição para executar e ir a campo",
  "Vontade de conversar com clientes e comerciantes",
  "Consistência para repetir o processo semana a semana",
];

const notFit = [
  "Espera resultado passivo, sem execução",
  "Procura renda garantida sem esforço",
  "Não tem disponibilidade para rodar a operação",
];

export default function AudienceFit() {
  return (
    <section className="grid md:grid-cols-2">
      <Reveal className="bg-brand p-12 md:p-16">
        <h3 className="font-display text-2xl text-white">Para você se:</h3>
        <ul className="mt-6 space-y-4">
          {fit.map((item) => (
            <li key={item} className="flex gap-3 text-white/90">
              <span className="text-positive">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={0.1} className="bg-bg p-12 md:p-16">
        <h3 className="font-display text-2xl text-white">Não é para você se:</h3>
        <ul className="mt-6 space-y-4">
          {notFit.map((item) => (
            <li key={item} className="flex gap-3 text-white/90">
              <span className="text-negative">×</span>
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
