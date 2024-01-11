import SearchBox from "@/components/searchBox";
import TaskBar from "@/components/taskBar";
import Info from "@/components/Info";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className=" text-sm h-auto transition-all scroll-smooth ">
        <TaskBar />
        <SearchBox />
        <Info />
      </div>
      <Footer />
    </main>
  );
}
