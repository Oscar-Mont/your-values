import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import ValuesTestPage from "./pages/ValuesTestPage"

function App() {


  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/values-test" element={<ValuesTestPage />}></Route>
    </Routes>
  )
}

export default App
