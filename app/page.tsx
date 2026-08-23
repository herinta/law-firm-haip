import Hero from "./components/Hero";
import TrustedClients from "./components/TrustedClients";
import ServicesList from "./components/ServicesList";
import WhyChooseUs from "./components/WhyChooseUs";
import FounderHighlight from "./components/FounderHighlight";
import Testimonials from "./components/Testimonials";
import LatestNewsHighlight from "./components/LatestNewsHighlight";

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <TrustedClients />
      <ServicesList />
      <WhyChooseUs />
      <FounderHighlight />
      <Testimonials />
      <LatestNewsHighlight />
    </main>
  );
}



