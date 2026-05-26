import { getEventos } from "@/lib/rya/queries";
import { notFound } from "next/navigation";
import EventForm from "@/components/rya/admin/EventForm";
import GoldDivider from "@/components/rya/ui/GoldDivider";
import Link from "next/link";

export default async function EditarEventoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const eventos = await getEventos();
  const evento = eventos.find((e) => e.id === id);
  if (!evento) notFound();

  return (
    <div>
      <Link href="/rya/admin" className="text-xs mb-4 inline-block" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
        ← Dashboard
      </Link>
      <h1 className="font-normal mb-2" style={{ fontFamily: "var(--font-title)", color: "var(--color-cream)", fontSize: "2rem" }}>
        {evento.titulo}
      </h1>
      <GoldDivider className="mb-8" />
      <EventForm evento={evento} />
    </div>
  );
}
