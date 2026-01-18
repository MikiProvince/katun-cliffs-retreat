import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { AdvantagesSection } from "@/components/AdvantagesSection";
import { RoomsSection } from "@/components/RoomsSection";
import { ConditionsSection } from "@/components/ConditionsSection";
import { GallerySection } from "@/components/GallerySection";
import { BookingSection } from "@/components/BookingSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ContactsSection } from "@/components/ContactsSection";
import { Footer } from "@/components/Footer";
import { TelegramButton } from "@/components/TelegramButton";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <AdvantagesSection />
      <RoomsSection />
      <ConditionsSection />
      <GallerySection />
      <BookingSection />
      <ReviewsSection />
      <ContactsSection />
      <Footer />
      <TelegramButton />
    </main>
  );
};

export default Index;
