import GoldDivider from "@/components/rya/ui/GoldDivider";
import ContactForm from "@/components/rya/contacto/ContactForm";

export const metadata = {
  title: "Contacto — RYA Shop",
  description: "Contáctanos para consultas, envíos y reservas.",
};

export default function ContactoPage() {
  return (
    <div style={{ background: "var(--color-bg)", minHeight: "100vh", paddingTop: "64px" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <GoldDivider width="narrow" />
            <span className="text-xs uppercase tracking-widest" style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)", letterSpacing: "0.2em" }}>
              Hablemos
            </span>
          </div>
          <h1
            className="font-normal"
            style={{ fontFamily: "var(--font-title)", color: "var(--color-cream)", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Contacto
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formulario */}
          <ContactForm />

          {/* Info */}
          <div className="flex flex-col gap-8">
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-4"
                style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)", letterSpacing: "0.15em" }}
              >
                Encuéntranos
              </p>
              <div className="flex flex-col gap-4">
                <ContactItem icon={<EmailIcon />} label="Email" value="shopatrya@gmail.com" href="mailto:shopatrya@gmail.com" />
                <ContactItem icon={<PhoneIcon />} label="WhatsApp" value="(787) 455-5405" href="https://wa.me/17874555405" />
                <ContactItem icon={<PhoneIcon />} label="Teléfono" value="(939) 261-1703" href="tel:+19392611703" />
                <ContactItem
                  icon={<InstagramIcon />}
                  label="Instagram"
                  value="@rya.shop2025"
                  href="https://instagram.com/rya.shop2025"
                  external
                />
              </div>
            </div>

            <GoldDivider />

            <div>
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)", letterSpacing: "0.15em" }}
              >
                Ubicación
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
                San Juan / Área Metro<br />Puerto Rico 🇵🇷
              </p>
              <p className="text-sm mt-3 leading-relaxed" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
                Enviamos a toda la isla. Envío coordinado por WhatsApp o DM de Instagram.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

function ContactItem({ icon, label, value, href, external }: ContactItemProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-4 group"
    >
      <div
        className="w-10 h-10 flex items-center justify-center flex-shrink-0 transition-colors"
        style={{ border: "1px solid rgba(200,169,110,0.3)", color: "var(--color-gold)" }}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)", letterSpacing: "0.1em", fontSize: "0.6rem" }}>
          {label}
        </p>
        <p className="text-sm transition-colors" style={{ color: "var(--color-cream)", fontFamily: "var(--font-body)" }}>
          {value}
        </p>
      </div>
    </a>
  );
}

function EmailIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
}

function PhoneIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
}

function InstagramIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
}
