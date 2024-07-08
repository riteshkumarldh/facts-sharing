import FactsListing from "@/components/home/FactsListing";
import FiltersSection from "@/components/home/FiltersSection";

export default async function Home() {
  return (
    <main className="max-w-2xl mx-auto w-full space-y-4 py-10">
      <FiltersSection />
      <FactsListing />
    </main>
  );
}
