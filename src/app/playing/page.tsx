'use client';

import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react"


const mockData = [{
    id: 0,
    question: "Question placeholder 1",
}, {
    id: 1,
    question: "Question placeholder 2",
}];

type Answer = "angular" | "vue" | "next"| "svelte";

export default function Play() {
    const [storedAnswers, setStoredAnswers] = useState<Answer[]>([]); //  Needs an state?
    const [question, setQuestion] = useState(mockData[0]);
    const [answer, setAnswer] = useState<Answer | null>(null)

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
            setStoredAnswers([...storedAnswers, answer])
            // 3. Next
            const nextId = question.id + 1; 
            if (nextId > mockData.length - 1) {
                // Finish!
                console.log("game ended")
            } else {
                setAnswer(null);
                setQuestion(mockData[nextId]);
            }
        }
    };
    
    // HTML
    return (
        <div className="mx-[25%] text-center">
            <div className="card">
                <h1 className="">{question.id + 1}</h1>
                <p>{question.question}</p>
                <ul>
                    <li>
                        <input type="checkbox" checked={ answer === "angular"} onChange={handleAnswerChange} value="angular"/>
                        <label htmlFor="first">Angular</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={ answer === "next"} onChange={handleAnswerChange} value="next"/>
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