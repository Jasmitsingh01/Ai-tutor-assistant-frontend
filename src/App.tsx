import { Route, Routes } from "react-router-dom"
import Index from "./Pages"
import Login from "./Pages/login"
import Signup from "./Pages/Singup"
import Tutor from "./Pages/Tutor"
import Layout from "./lib/layout/Layout"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Layout/>}>
          <Route path="ask" element={<Tutor/>}/>
        </Route>




      </Routes>
    </>
   
  )
}

export default App
