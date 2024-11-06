'use client';

import { Questions } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react"

type Answer = "angular" | "vue" | "react"| "svelte";

export default function Play({ data }: { data: Array<Questions> }) {
    const [index, setIndex] = useState(0);
    const [answer, setAnswer] = useState<Answer | null>(null)
    const [result, setResult] = useState({
        angular:0,  
        vue:0,      
        svelte:0,   
        react:0,    
    });

    const router = useRouter();

    // Handlers
    const handleAnswerChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value as Answer;  // Type guard
        if (value === answer) {
            setAnswer(null);
        } else {
            setAnswer(value)
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
            setResult({...result})
            // 3. Next
            const nextId = index + 1;
            if (nextId > 1) { // [ ] data.length - 1
                const url = "/api/save/" + data[0].quizz_id;
                
                fetch(url, {
                    method: "POST",
                    body: JSON.stringify(result)
                }).then((res) => {
                    return res.json()
                }).then((res) => {
                    if (res.success) {
                        router.push("/finish?id="+res.data.id)
                        console.log("push")
                    }
                })
            } else {
                setAnswer(null);
                setIndex(nextId);
            }
        }
    };
    
    // HTML
    return (
        <div className="mx-[25%] text-center">
            <div className="card">
                <h1 className="">{data[index].id}</h1>
                <p>{data[index].text}</p>
                <ul>
                    <li>
                        <input type="checkbox" checked={ answer === "angular"} onChange={handleAnswerChange} value="angular"/>
                        <label htmlFor="first">Angular</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={ answer === "react"} onChange={handleAnswerChange} value="next"/>
                        <label>Next.js / Vanilla React</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={ answer === "vue"} onChange={handleAnswerChange} value="vue"/>
                        <label htmlFor="first">Vue</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={ answer === "svelte"} onChange={handleAnswerChange} value="svelte"/>
                        <label htmlFor="first">Svelte</label>
                    </li>
                    <button type="button" onClick={handleNextClick}>Next</button>
                </ul>
            </div>
        </div>
    )
}