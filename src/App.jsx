import { Route, Routes, useLocation } from "react-router"

import Home from "./pages/home"
import Navbar from "./components/navbar"
import BreadCrumps from "./components/bread-crumps"
import Types_of_models from "./pages/types-of-models"
import AboutCar from "./pages/about-car"
import Admin from "./pages/admin"
import Login from "./pages/login"
import { useEffect, useState } from "react"
import Register from "./pages/register"

const App = () => {
  const location = useLocation()
  const [checkParamsIsActive, setcheckParamsIsActive] = useState(true)
  

  useEffect(() => {
    if (location.pathname === '/admin' || location.pathname === '/login' || location.pathname === '/register') {
      setcheckParamsIsActive(false)
    } else {
      setcheckParamsIsActive(true)
    }
      
  }, [location])
  return (
    <>
      <Navbar />
      {/* {checkParamsIsActive && <BreadCrumps />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/modellari" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/modellari/:slug" element={<Types_of_models />} />
        <Route path="/modellari/:slug/:slug" element={<AboutCar />} />
      </Routes>
    </>
  )
}

export default App
