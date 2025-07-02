import { Header, Hero, OurPricing, OurServer } from "@/components";

const Home = () => {
  return (
    <>
      <Header />
      <main className="wrapper">
        <Hero />
        <OurServer />
        <OurPricing />
      </main>
    </>
  );
};

export default Home;
