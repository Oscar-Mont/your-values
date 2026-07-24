import { useLocation } from "react-router"
import type { Value } from "../data/values"


export default function ResultsPage() {
    const location = useLocation()
    const { finalValues } = location.state as { finalValues: Value[] }
    return (
        <div>
            <h1>Your top values</h1>
            <ul>{finalValues.map((value) => (
                <li key={value.id}>{value.name}</li>
            ))}</ul>
        </div>
    )
}