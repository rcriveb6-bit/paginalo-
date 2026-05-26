import TabBar from "@/components/TabBar";

export default function BrandsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <TabBar />
      <div className="flex-grow">{children}</div>
    </div>
  );
}
