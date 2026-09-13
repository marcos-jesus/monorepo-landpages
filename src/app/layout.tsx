import type { Metadata } from "next";
import { Archivo_Black, Manrope } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Wendel Peterson — Da placa à primeira rota de vendas",
  description:
    "Treinamento prático para aprender a preparar, configurar e vender placas de avaliação com QR Code e NFC.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${archivoBlack.variable} ${manrope.variable}`}>
      <body className="bg-bg text-white font-body antialiased">
        <noscript>
          <style>{`[style*="opacity:0"] { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <MotionConfig reducedMotion="user">
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
