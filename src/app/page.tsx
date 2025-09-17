import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SearchForm from "@/components/search/SearchForm";
import Faq from "@/components/home/Faq";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-6">
        <section className="text-center w-full py-20 md:py-32 flex flex-col justify-center items-center">
          <h1 className="text-8xl md:text-9xl font-bold font-headline mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            Nivora
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find Your Home Away From Home. Discover the best PGs, messes, and flats near your college with AI-powered insights.
          </p>
        </section>
        
        <section className="py-12">
          <SearchForm />
        </section>

        <Faq />

      </main>
      <Footer />
    </div>
  );
}
