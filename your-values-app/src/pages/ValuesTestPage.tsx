import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ValuesGrid from "../components/ValuesGrid";
import type { Value } from "../data/values";
import { values } from "../data/values";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function ValuesTestPage() {


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