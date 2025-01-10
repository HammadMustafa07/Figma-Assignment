import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Recentpost from "@/components/Recentpost";
import Featuredworks from "@/components/Featuredworks";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <Recentpost/>
      <Featuredworks/>
    </div>
  );
}
