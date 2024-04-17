import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import PopularPrice from "./sections/PopularPrice";
import Subscribe from "./sections/Subscribe";
import Services from "./sections/Service";
import SuperQuality from "./sections/SuperQuality";
import Nav from "./components/Nav";
import SpecialOffer from "./sections/SpecialOffer";

function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l  wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularPrice />
      </section>

      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x bg-black padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}

export default App;
