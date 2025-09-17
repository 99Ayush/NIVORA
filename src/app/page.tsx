import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SearchForm from "@/components/search/SearchForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="text-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Nivora
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your home away from home. Discover the best PGs, messes, and flats near your college with AI-powered insights.
          </p>
          <SearchForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
