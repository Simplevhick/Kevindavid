
import Blogs from "@/components/Blogs";
import Hero from "@/components/Hero";
import Tour from "@/components/Tour";
// import Carousel from "@/components/Carousel";
import About from "@/components/About"
import Contact from "@/components/Contact"



export default function Home() {
  return (
    <main>
      <Hero heading="SAMSON" message="ADEGBO" />
      <Blogs />
      <Tour />
      {/* <Carousel /> */}
      <About />
      <Contact />
    </main>
  );
}
