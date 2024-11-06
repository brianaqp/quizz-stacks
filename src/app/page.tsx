"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="text-center bg-blue-300 mt-[10%] w-[400px] h-[500px] mx-auto border-2 justify-around rounded-r-md border-green-400 flex flex-col gap-[50px] flex-nowrap">
      <div className="mt-2">
        <h1 className="text-2xl text-centered">
          Are you ready for take the Quizz?
        </h1>
      </div>
      <button
        onClick={() => router.push("/playing")}
        className="w-40 mx-auto px-auto border-2 bg-violet-800 text-white rounded-md"
      >
        Click me!
      </button>
    </div>
  );
}
