import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import GetMovie from "./Pages/GetMovies";
import SingleMovie from "./Pages/SingleMovie";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetMovie/>}/>
        <Route path="/ParticluarMovie" element={<SingleMovie/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
