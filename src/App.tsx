import { Route, Routes } from "react-router-dom";
import Index from "./Pages";

import Tutor from "./Pages/Tutor";
import Layout from "./lib/layout/Layout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        
        <Route path="/" element={<Layout />}>
          <Route path="ask" element={<Tutor />} />
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
