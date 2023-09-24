import Banner from "@/app/components/Banner";
import Navbar from "@/app/components/Navbar";
import Projects from "@/app/components/Projects";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <Navbar />
      <Banner />
      <Projects />
    </main>
  );
}
