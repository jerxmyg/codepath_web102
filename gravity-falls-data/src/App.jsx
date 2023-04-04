import { Link, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Information from "./Page/Information"

import './App.css'


function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/" id="home">Home</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="character/:id" element={<Information />} />
    </Routes>
    </>
  )

}

export default App
