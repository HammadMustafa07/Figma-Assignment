import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Recentpost from "@/components/Recentpost";
import Featuredworks from "@/components/Featuredworks";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <Recentpost/>
      <Featuredworks/>
      <Footer/>
    </div>
  );
}
