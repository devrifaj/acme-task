import { Header, Hero, OurServer } from "@/components";

const Home = () => {
  return (
    <>
      <Header />
      <main className="wrapper">
        <Hero />
        <OurServer/>
      </main>
    </>
  );
};

export default Home;
