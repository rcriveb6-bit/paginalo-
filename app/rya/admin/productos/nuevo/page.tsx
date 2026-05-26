import ProductForm from "@/components/rya/admin/ProductForm";
import GoldDivider from "@/components/rya/ui/GoldDivider";
import Link from "next/link";

export const metadata = { title: "Nuevo Producto — RYA Admin" };

export default function NuevoProductoPage() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <Link href="/rya/admin" className="text-xs" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
          ← Dashboard
        </Link>
      </div>
      <h1 className="font-normal mb-2" style={{ fontFamily: "var(--font-title)", color: "var(--color-cream)", fontSize: "2rem" }}>
        Nuevo Producto
      </h1>
      <GoldDivider className="mb-8" />
      <ProductForm />
    </div>
  );
}
