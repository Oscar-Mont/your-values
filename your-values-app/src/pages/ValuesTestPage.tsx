import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ValuesGrid from "../components/ValuesGrid";
import type { Value } from "../data/values";
import { values } from "../data/values";
import { useEffect, useState } from "react";
import { Link } from "react-router";


const firstRemainingValues: Value[] = values.slice(10)
const firstRoundValues = values.slice(0, 10)

export default function ValuesTestPage() {
    const [remainingValues, setRemainingValues] = useState<Value[]>(firstRemainingValues)
    const [roundValues, setRoundValues] = useState<Value[]>(firstRoundValues)
    const [selectedValues, setSelectedValues] = useState<Value[]>([])

    function getRoundValues() {
        if (remainingValues.length > 5) {
            const valuesToMove = remainingValues.slice(0, 10)
            const keptValues = remainingValues.slice(10)
            setRemainingValues(keptValues)
            setRoundValues(valuesToMove)
        }
        if (remainingValues.length === 5) {
            console.log("Game over")
        }
    }


    function handleValueToggle(value: Value) {
        setSelectedValues(prev => {
            const exists = prev.some(obj => obj.id === value.id)
            if (exists) {
                return prev.filter(obj => obj.id !== value.id)
            }
            if (prev.length === 5) {
                alert("You can Only Select 5 Values per Round")
                return prev
            }
            return [...prev, value]
        })
    }

    function handleContinue() {
        console.log("selected:", selectedValues)
        console.log("remaining before update:", remainingValues)
        //check if 5 are selected
        if (selectedValues.length === 5) {
            setRemainingValues(prev => [...prev, ...selectedValues])
            setSelectedValues([])
            setRoundValues([])
            return
        }
        if (selectedValues.length < 5) {
            alert("You need to select 5 values to continue")
            return
        }
    }

    useEffect(() => {
        getRoundValues()
    }, [remainingValues])

    return (
        <div className="flex flex-col flex-1 min-h-screen">
            <Header />
            <main className="flex flex-col flex-1 justify-center align-center">
                <p className="text-violet-50 text-center font-semibold text-2xl m-3">From the list below, select the 5 values that resonate the most with you.</p>
                <div className="flex justify-center align-center">
                    <ValuesGrid values={roundValues} onValueToggle={handleValueToggle} selectedValues={selectedValues} />
                </div>
                {/* container
            round counter*/}
                <div className="self-end m-10">{remainingValues.length === 5 ? <Link to="/results" className="bg-cyan-500 rounded-lg py-2 px-4 text-2xl text-violet-50 font-semibold" state={{ finalValues: remainingValues }}>Continue</Link> :
                    <Button variant="start" onClick={() => handleContinue()}>Continue</Button>}
                </div>
            </main>
            <Footer />
        </div>
    )
}