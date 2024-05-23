import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <section className="bg-[url('/images/hero-section-mobile.svg')] md:bg-[url('/images/hero-section-desktop.svg')] h-[100svh] bg-cover p-10">
        <div className="w-1/2">
          <h1 className="font-extrabold text-5xl text-yellow-50 leading-relaxed">
            Gear Up for Greatness: Elevate Your{" "}
            <span className="stroke-property text-6xl text-red-700">
              Performance
            </span>{" "}
            Today!
          </h1>
        </div>
      </section>

      <section className="p-10">
        <h2 className="text-center font-bold text-xl">Popular products</h2>
      </section>
    </>
  );
}

export default Home;
