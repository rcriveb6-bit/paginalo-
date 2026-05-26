import { getProductoById } from "@/lib/rya/queries";
import { notFound } from "next/navigation";
import ProductForm from "@/components/rya/admin/ProductForm";
import GoldDivider from "@/components/rya/ui/GoldDivider";
import Link from "next/link";

export const metadata = { title: "Editar Producto — RYA Admin" };

export default async function EditarProductoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const producto = await getProductoById(id);
  if (!producto) notFound();

  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <Link href="/rya/admin" className="text-xs" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
          ← Dashboard
        </Link>
      </div>
      <h1 className="font-normal mb-2" style={{ fontFamily: "var(--font-title)", color: "var(--color-cream)", fontSize: "2rem" }}>
        {producto.nombre}
      </h1>
      <GoldDivider className="mb-8" />
      <ProductForm producto={producto} />
    </div>
  );
}
