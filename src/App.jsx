import { Route, Routes } from "react-router"
import Home from "./pages/home"
import Navbar from "./components/navbar"
import BreadCrumps from "./components/bread-crumps"
import Types_of_models from "./pages/types-of-models"
import AboutCar from "./pages/about-car"
import Admin from "./pages/admin"

const App = () => {
  return (
    <>
      <Navbar />
      {false && <BreadCrumps />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modellari" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/modellari/:slug" element={<Types_of_models />} />
        <Route path="/modellari/:slug/:slug" element={<AboutCar />} />
      </Routes>
    </>
  )
}

export default App
