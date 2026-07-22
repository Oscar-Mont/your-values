// import Button from "../components/Button"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router"

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex flex-col  flex-1 justify-center items-center m-4">
                <h1 className="text-6xl text-white text-center p-2">What are ?</h1>
                <h1 className="text-6xl text-white text-center p-2">YOUR</h1>
                <h1 className="text-6xl text-white text-center p-2">Values?</h1>
                <h3 className="text-3xl text-white text-center p-2 mt-7 mb-7">A quick and simple game to help you find your top-5 values</h3>
                <Link to="/values-test" className="bg-cyan-500 rounded-lg py-4 px-8 text-2xl text-violet-50 font-semibold">Let's Do It!</Link>
            </main>

            <Footer />
        </div>
    )
}