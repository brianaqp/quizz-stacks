"use client";

import { Questions } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

type Answer = "angular" | "vue" | "react" | "svelte";

export default function Play({ data }: { data: Array<Questions> }) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<Answer | null>(null);
  const [result, setResult] = useState({
    angular: 0,
    vue: 0,
    svelte: 0,
    react: 0,
  });

  const router = useRouter();

  // Handlers
  const handleAnswerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as Answer; // Type guard
    if (value === answer) {
      setAnswer(null);
    } else {
      setAnswer(value);
    }
  };

  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    // 1. Form validation
    if (answer === null) {
      // Show some error
      console.error("Error! Answer is null");
    } else {
      // 2. Store answer
      result[answer] += data[index].value;
      setResult({ ...result });
      // 3. Next
      const nextId = index + 1;
      if (nextId > 1) {
        // [ ] data.length - 1
        const url = "/api/save/" + data[0].quizz_id;

        fetch(url, {
          method: "POST",
          body: JSON.stringify(result),
        })
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            if (res.success) {
              router.push("/finish?id=" + res.data.id);
              console.log("push");
            }
          });
      } else {
        setAnswer(null);
        setIndex(nextId);
      }
    }
  };

  // HTML
  return (
    <div className="text-center bg-blue-300 mt-[10%] w-[400px] h-[500px] mx-auto border-2 justify-around rounded-r-md border-green-400 flex flex-col gap-[50px] flex-nowrap">
      <div className="header">
        <p className="text-2xl">Question number {data[index].id}</p>
      </div>
      <div className="body mx-10">
        <span className="text-xl">{data[index].text}</span>
      </div>
      <div className="options flex flex-col gap-2">
        <label>
          <input
            type="checkbox"
            checked={answer === "angular"}
            onChange={handleAnswerChange}
            value="angular"
          />
          &nbsp;Angular
        </label>
        <label>
          <input
            type="checkbox"
            checked={answer === "react"}
            onChange={handleAnswerChange}
            value="react"
          />
          &nbsp;React
        </label>
        <label>
          <input
            type="checkbox"
            checked={answer === "vue"}
            onChange={handleAnswerChange}
            value="vue"
          />{" "}
          &nbsp;Vue
        </label>
        <label>
          <input
            type="checkbox"
            checked={answer === "svelte"}
            onChange={handleAnswerChange}
            value="svelte"
          />
          &nbsp;Svelte
        </label>
      </div>
      <button type="button" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
}
