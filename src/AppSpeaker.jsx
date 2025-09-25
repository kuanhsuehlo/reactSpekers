import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Story from "./pages/Story"
import Categories from "./pages/Categories"



const AppSpeaker = () => {
  return (
    <>
    <Nav/>
    {/* 管理頁面區 */}
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Story' element={<Story/>}></Route>
        <Route path='/Categories' element={<Categories/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default AppSpeaker