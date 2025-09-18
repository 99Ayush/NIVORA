"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SearchForm from "@/components/search/SearchForm";
import AboutUs from "@/components/home/AboutUs";
import Faq from "@/components/home/Faq";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Find Your Home Away From Home. Discover the best PGs, messes, and flats near your college with AI-powered insights.";
  const typingSpeed = 50; // milliseconds per character

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeoutId);
    }
  }, [typedText, fullText]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-6">
        <section className="text-center w-full py-20 md:py-32 flex flex-col justify-center items-center">
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold font-headline leading-none mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-background-pan bg-[200%_auto]">
            Nivora
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto italic min-h-[48px] md:min-h-[56px]">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
        </section>
        
        <section className="py-12">
          <SearchForm />
        </section>

        <Faq />
        <AboutUs />

      </main>
      <Footer />
    </div>
  );
}
