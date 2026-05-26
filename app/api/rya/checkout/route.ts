import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/rya/stripe";
import { CartItem } from "@/lib/rya/types";

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === "sk_test_placeholder" || process.env.STRIPE_SECRET_KEY === "") {
    const origin = req.headers.get("origin") ?? "http://localhost:3000";
    return NextResponse.json({ url: `${origin}/rya/success` });
  }

  const { items }: { items: CartItem[] } = await req.json();

  if (!items || items.length === 0) {
    return NextResponse.json({ error: "No items" }, { status: 400 });
  }

  const lineItems = items.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.producto.nombre,
        description: [
          item.producto.talla && `Talla ${item.producto.talla}`,
          item.producto.estado,
        ]
          .filter(Boolean)
          .join(" · "),
        images: item.producto.fotos_url?.slice(0, 1) ?? [],
      },
      unit_amount: Math.round(item.producto.precio * 100),
    },
    quantity: item.cantidad,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: `${req.headers.get("origin")}/rya/success`,
    cancel_url: `${req.headers.get("origin")}/rya/checkout`,
    shipping_address_collection: {
      allowed_countries: ["PR", "US"],
    },
    metadata: {
      product_ids: items.map((i) => i.producto.id).join(","),
    },
  });

  return NextResponse.json({ url: session.url });
}
