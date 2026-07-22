import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import ValuesTestPage from "./pages/ValuesTestPage"
import ResultsPage from "./pages/ResultsPage"

function App() {


  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/values-test" element={<ValuesTestPage />}></Route>
      <Route path="/results" element={<ResultsPage />}></Route>
    </Routes>
  )
}

export default App
