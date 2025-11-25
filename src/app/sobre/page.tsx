import ClientFetch from "@/src/components/client-fetch";
import Width from "@/src/components/width";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Página sobre nós",
};
export default function SobrePage() {
  return (
    <main>
      <h2>Sobre</h2>
      <Width />
      <ClientFetch />
    </main>
  );
}
