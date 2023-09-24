import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <Navbar />
      <Footer />
    </main>
  );
}