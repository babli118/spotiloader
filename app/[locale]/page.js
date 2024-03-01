import SearchBox from "../../components/searchBox.jsx";
import Info from "../../components/Info.jsx";
import Hero from "../../components/Hero.jsx";

export default function Home() {
  return (
    <main>
      <div className=" text-sm h-auto transition-all overflow-x-hidden scroll-smooth ">
        <Hero />
        <SearchBox />
        <Info />
      </div>
    </main>
  );
}
