import Image from "next/image";
import Banner from "@/app/components/Banner";
import Navbar from "@/app/components/Navbar";
import Projects from "@/app/components/Projects";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center bg-pink-100">
      <Navbar />
      <Banner />
      <Projects />
      <Footer />
    </main>
  );
}
