import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Providers from "@/components/Providers";
import Training from "@/components/Training";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Providers />
        <Training />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
