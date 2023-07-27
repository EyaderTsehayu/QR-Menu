import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hello world */}
      <Navbar />
      <Menu />
    </main>
  );
}
