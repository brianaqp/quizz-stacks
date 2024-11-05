'use client';

import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
    return (
      <div className="text-center">
        <span>Working</span>
        <h1 >Are you ready for take the Quizz?</h1>
        <button onClick={() => router.push("/playing")}>Click me!</button>
      </div>
    );
}
