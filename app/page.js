import SearchBox from "@/components/searchBox";
import TaskBar from "@/components/taskBar";

export default function Home() {
  return (
    <main className=" ">
      <div className=" items-center justify-between font-mono text-sm ">
        <TaskBar />
        <SearchBox />
      </div>
    </main>
  );
}
