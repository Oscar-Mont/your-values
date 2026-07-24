import { useLocation } from "react-router"
import type { Value } from "../data/values"
import ResultsGrid from "../components/ResultsGrid"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function ResultsPage() {
    const location = useLocation()
    const { finalValues } = location.state as { finalValues: Value[] }
    return (
        <div className=" flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-col flex-1 justify-center items-center">
                <ResultsGrid finalValues={finalValues} />
            </main>
            <Footer />
        </div>
    )
}