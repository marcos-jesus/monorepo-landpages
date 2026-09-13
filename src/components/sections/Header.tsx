import Button from "@/components/ui/Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="font-display text-lg tracking-tight">
          Wendel Peterson <span className="text-brand">NFC PRO</span>
        </span>
        <Button href="#oferta" variant="outline">
          Quero entrar
        </Button>
      </div>
    </header>
  );
}
