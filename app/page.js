import Blogs from "@/components/Blogs";
import Hero from "@/components/Hero";
import Tour from "@/components/Tour";
// import Details from "@/components/Details";

export default function Home() {
  return (
    <main>
      <Hero heading="KEVIN" message="KAYDEE" />
      <Blogs />
      <Tour />
      {/* <Details /> */}
    </main>
  );
}
