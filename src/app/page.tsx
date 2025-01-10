import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Recentpost from "@/components/Recentpost";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <Recentpost/>
    </div>
  );
}
