import EventForm from "@/components/rya/admin/EventForm";
import GoldDivider from "@/components/rya/ui/GoldDivider";
import Link from "next/link";

export const metadata = { title: "Nuevo Evento — RYA Admin" };

export default function NuevoEventoPage() {
  return (
    <div>
      <Link href="/rya/admin" className="text-xs mb-4 inline-block" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
        ← Dashboard
      </Link>
      <h1 className="font-normal mb-2" style={{ fontFamily: "var(--font-title)", color: "var(--color-cream)", fontSize: "2rem" }}>
        Nuevo Evento
      </h1>
      <GoldDivider className="mb-8" />
      <EventForm />
    </div>
  );
}
