import Nav from "@/components/liora/Nav";
import Hero from "@/components/liora/Hero";
import Ticker from "@/components/liora/Ticker";
import ProductGrid from "@/components/liora/ProductGrid";
import AboutSection from "@/components/liora/AboutSection";
import Features from "@/components/liora/Features";
import InstagramCTA from "@/components/liora/InstagramCTA";
import CatalogSection from "@/components/liora/CatalogSection";
import Footer from "@/components/liora/Footer";
import CartDrawer from "@/components/liora/CartDrawer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <ProductGrid />
        <AboutSection />
        <Features />
        <InstagramCTA />
        <CatalogSection />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
