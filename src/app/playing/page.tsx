'use client';

import { ChangeEvent, useState } from "react"

const mockData = [{
    id: 0,
    question: "Question placeholder 1",
}, {
    id: 1,
    question: "Question placeholder 2",
}];

export default function Play() {
    const [question, setQuestion] = useState(mockData[0]);
    // Handlers
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        // Next question
        // 1. Form validation
        // 2. Store answer
        // 3. Next
        setQuestion(mockData[1]);
    }
    return (
        <div className="mx-[25%] text-center">
            <Card data={question} />
            <button type="button" onClick={handleClick}>Next</button>
        </div>
    )
}

function Card({ data }: {
    data: {
        id: number,
        question: string,
    }
}) {
    const [answer, setAnswer] = useState<string | null>(null)
    // Handlers
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAnswer(e.target.value)
    }
    return (
        <div className="card">
            <h1 className="">{data.id + 1}</h1>
            <p>{data.question}</p>
            <ul>
                <li>
                    <input type="checkbox" checked={ answer === "angular"} onChange={handleChange} value="angular"/>
                    <label htmlFor="first">Angular</label>
                </li>
                <li>
                    <input type="checkbox" checked={ answer === "next"} onChange={handleChange} value="next"/>
                    <label>Next.js / Vanilla React</label>
                </li>
                <li>
                    <input type="checkbox" checked={ answer === "vue"} onChange={handleChange} value="vue"/>
                    <label htmlFor="first">Vue</label>
                </li>
                <li>
                    <input type="checkbox" checked={ answer === "svelte"} onChange={handleChange} value="svelte"/>
                    <label htmlFor="first">Svelte</label>
                </li>
            </ul>
        </div>
    )
}