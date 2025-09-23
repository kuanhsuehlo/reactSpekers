import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"



const AppSpeaker = () => {
  return (
    <>
    <Nav/>
    {/* 管理頁面區 */}
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        {/* <Route path="/about" element={<About/>}></Route> */}
    </Routes>
    <Footer/>
    </>
  )
}

export default AppSpeaker