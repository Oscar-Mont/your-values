import type { Value } from "../data/values"

type ResultsGridProps = {
    finalValues: Value[]
}

export default function ResultsGrid({ finalValues }: ResultsGridProps) {

    return <div className="flex flex-col gap-8 justify-center items-center">
        <h1 className="text-4xl text-violet-50">Your Top values</h1>
        <div className="bg-radial-[at_50%_50%] from-violet-400 via-violet-50 to-violet-50 to-90% size-80 rounded-4xl flex justify-center items-center">
            <ul className="flex flex-col justify-center items-center gap-2">{finalValues.map((v) => (
                <li key={v.id} className="text-2xl">{v.name}</li>))}
            </ul>
        </div>
    </div>
}