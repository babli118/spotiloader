import SearchBox from "@/components/searchBox";
import TaskBar from "@/components/taskBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className=" items-center justify-between font-mono text-sm ">
        <TaskBar />
        <SearchBox />
      </div>
    </main>
  );
}
