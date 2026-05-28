import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiciosSection from "./components/ServiciosSection";
import TalentosSection from "./components/TalentosSection";
import EstadisticasSection from "./components/EstadisticasSection";
import FaqSection from "./components/FaqSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServiciosSection />
        <TalentosSection />
        <EstadisticasSection />
        <FaqSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;