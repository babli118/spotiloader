import SearchBox from "../components/searchBox.jsx";
import TaskBar from "../components/taskBar.jsx";
import Info from "../components/Info.jsx";
import Footer from "../components/Footer.jsx";

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
