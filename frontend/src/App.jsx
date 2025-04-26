import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index.jsx";
import Quiz from "./components/Quiz/Quiz.jsx";
import SolarPage from './components/SolarPage.jsx';
import Comets from './components/Learning/Comets.jsx';
import PlanetDetail from './components/PlanetDetails/PlanetDetail.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/solar' element={<SolarPage/>}/>
        <Route path='/quiz' element = {<Quiz/>}/>
        <Route path='/learning/comet' element={<Comets/>}/>
        <Route path="/planet/:name" element={<PlanetDetail />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
