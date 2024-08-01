import Blogs from "@/components/Blogs";
import Hero from "@/components/Hero";
import Tour from "@/components/Tour";
import Carousel from "@/components/Carousel";
import About from "@/components/About"
import Contact from "@/components/Contact"

const videos = [
  { url: './assets/chat.mp4', title: 'Video 1' },
  { url: './assets/craft.mp4', title: 'Video 2' },
  { url: './assets/chat.mp4', title: 'Video 3' },
  { url: 'https://www.youtube.com/embed/video1', title: 'Video 1', thumbnail: '/thumbnails/video1.jpg' },
  { url: 'https://www.youtube.com/embed/video2', title: 'Video 2', thumbnail: '/thumbnails/video2.jpg' },
  { url: 'https://www.youtube.com/embed/video3', title: 'Video 3', thumbnail: '/thumbnails/video3.jpg' },

  //  Add more video objects as needed
];

export default function Home() {
  return (
    <main>
      <Hero heading="SAMSON" message="" />
      <Blogs />
      <Tour />
      <Carousel videos={videos} />
      <About />
      <Contact />
    </main>
  );
}
