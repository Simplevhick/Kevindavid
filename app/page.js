import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Tour from "@/components/Tour";
// import Details from "@/components/Details";

export default function Home() {
  return (
    <main>
      <Hero heading="KEVIN" message="DAVID" sub="KAYDEE" />
      <Blogs />
      <Tour />
      {/* <Details /> */}
      {/* <Footer /> */}
    </main>
  );
}
