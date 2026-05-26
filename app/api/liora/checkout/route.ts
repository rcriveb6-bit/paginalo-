import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/liora/stripe";

interface LineItem {
  id: number;
  name: string;
  price: number;
  qty: number;
}

export async function POST(req: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === "sk_test_placeholder" || process.env.STRIPE_SECRET_KEY === "") {
      const origin = req.headers.get("origin") ?? "http://localhost:3000";
      return NextResponse.json({ url: `${origin}/liora/success` });
    }

    const { items }: { items: LineItem[] } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Carrito vacío" }, { status: 400 });
    }

    const origin = req.headers.get("origin") ?? "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: `LIORA — ${item.name}`,
            description: "Vela artesanal de soya · Hand-poured en Puerto Rico",
            images: [],
          },
          unit_amount: item.price * 100,
        },
        quantity: item.qty,
      })),
      mode: "payment",
      success_url: `${origin}/liora/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/liora#productos`,
      shipping_address_collection: {
        allowed_countries: ["PR", "US"],
      },
      custom_text: {
        submit: {
          message: "Solo hacemos envíos dentro de Puerto Rico y Estados Unidos.",
        },
      },
      metadata: {
        items: JSON.stringify(items.map((i) => ({ id: i.id, qty: i.qty }))),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: "Error creando sesión de pago" }, { status: 500 });
  }
}
