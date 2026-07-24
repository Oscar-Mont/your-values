import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ValuesGrid from "../components/ValuesGrid";
import type { Value } from "../data/values";
import { values } from "../data/values";
import { useState } from "react";
import { Link } from "react-router";

//Lesson: Instead of removing and selectively adding items again...
//Selectively eliminate items from remainingValues and leave everything else untouched
//Do pick items with slice for round

// //First Round Data
const firstRoundValues: Value[] = values.slice(0, 10)


export default function ValuesTestPage() {
    // STATE AND VARIABLES
    const [remainingValues, setRemainingValues] = useState<Value[]>(values)
    const [roundValues, setRoundValues] = useState<Value[]>(firstRoundValues)
    const [selectedValues, setSelectedValues] = useState<Value[]>([])
    const [message, setMessage] = useState<string>("From the list below, select the 5 values that resonate the most with you.")

    //EVENT HANDLERS

    function handleValueToggle(value: Value) {
        //check if the value is contained in selectedValues
        const exist = selectedValues.some(v => v.id === value.id)
        //if the value isnot in selectedValues->push the value to selectedValues
        if (!exist) {
            if (selectedValues.length === 5) {
                alert("Ypu can only select 5 values per round")
                return
            }
            setSelectedValues(prev => [...prev, value])
            return
        }

        setSelectedValues(prev => prev.filter(v => v.id !== value.id))
    }

    function handleContinue() {

        if (selectedValues.length !== 5) {
            alert("You need to select 5 values to continue")
            return
        }


        //Track with a variable all items that are in roundValues but not in selectedValues: discardedValues
        const selectedValuesIds = new Set(selectedValues.map(v => v.id))
        const discardedValues = roundValues.filter(v => !selectedValuesIds.has(v.id))

        //Using discardedValues array, delete all items in remainingValues that match these discarded values ids, store it in: nextRemaining
        const discardedValuesIds = new Set(discardedValues.map(v => v.id))
        const tempRemaining = remainingValues
        const nextRemaining = tempRemaining.filter(v => !discardedValuesIds.has(v.id))

        //From nextRemaining, get :nextRound
        const nextRound = nextRemaining.slice(0, 10)

        //Stop the game when Remaining Values equals 5
        if (nextRemaining.length === 5) {
            console.log("The game stopper worked")
            setMessage("Your Results Are Ready!")
            setRemainingValues(nextRemaining)
            return
        }

        //Update state
        setRemainingValues(nextRemaining)
        setRoundValues(nextRound)
        setSelectedValues([])

        //Debugging
        console.log("You selected")
        console.log(selectedValues)

        console.log("New remaining values")
        console.log(nextRemaining)

        console.log("Next Round will use:")
        console.log(nextRound)
    }

    return (
        <div className="flex flex-col flex-1 min-h-screen">
            <Header />
            <main className="flex flex-col flex-1 justify-center align-center">
                <p className="text-violet-50 text-center font-semibold text-2xl m-3">{message}</p>
                <div className="flex justify-center align-center">{remainingValues.length === 5 ? <h1 className="text-8xl">🙌</h1> : <ValuesGrid values={roundValues} onValueToggle={handleValueToggle} selectedValues={selectedValues} />}

                </div>
                {/* container
            round counter*/}
                <div className="self-end m-10">
                    {remainingValues.length === 5 ? <Link to="/results" className="bg-cyan-500 rounded-lg py-2 px-4 text-2xl text-violet-50 font-semibold" state={{ finalValues: remainingValues }}>See Results</Link> :
                        <Button variant="start" onClick={() => handleContinue()}>Continue</Button>}
                </div>
            </main>
            <Footer />
        </div>
    )
}