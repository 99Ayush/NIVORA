import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SearchForm from "@/components/search/SearchForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-6">
        <div className="text-center w-full pt-16 md:pt-24">
          <h1 className="text-6xl md:text-8xl font-bold font-headline mb-4">
            Nivora
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find Your Home Away From Home. Discover the best PGs, messes, and flats near your college with AI-powered insights.
          </p>
          <SearchForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
