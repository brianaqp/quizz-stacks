export default function Profile() {
    const question = {
        number: 1,
        question: "?"
    }
    return (
        <div className="mx-[25%] text-center">
            <h1 className="">{question.number}</h1>
            <p>{question.question}</p>
            <ul>
                <li>
                    <input type="checkbox" value="0" />
                    <label htmlFor="first">Angular</label>
                </li>
                <li>
                    <input type="checkbox" value="0" />
                    <label>Next.js / Vanilla React</label>
                </li>
                <li>
                    <input type="checkbox" value="0" />
                    <label htmlFor="first">Vue</label>
                </li>
                <li>
                    <input type="checkbox" value="0" />
                    <label htmlFor="first">Svelte</label>
                </li>
            </ul>
            <button type="button">Siguiente pregunta</button>
        </div>
    )
}