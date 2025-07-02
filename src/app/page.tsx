import { Footer, Header, Hero, OurPricing, OurServer } from "@/components";

const Home = () => {
  return (
    <>
      <Header />
      <main className="wrapper">
        <Hero />
        <OurServer />
        <OurPricing />
      </main>
      <Footer />
    </>
  );
};

export default Home;
