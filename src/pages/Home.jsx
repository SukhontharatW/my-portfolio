import About from "../ui/About";
import Hero from "../ui/Hero";
import Project from "../ui/Project";

function Home() {
  return (
    <>
      <Hero />
      <div className="m-auto max-w-screen-xl px-4">
        <About />
        <Project />
      </div>
    </>
  );
}

export default Home;
