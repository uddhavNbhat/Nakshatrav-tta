import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
