import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Navbar from "../components/Navbar"
import AboutPage from "../pages/AboutPage"
import MenuQuizPage from "../pages/MenuQuizPage"
import QuizPageAngka from "../pages/QuizPageAngka"
import QuizPageHuruf from "../pages/QuizPageHuruf"

function RootLayout(){
    return(
        <>
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz-angka" element={<QuizPageAngka />} />
            <Route path="/quiz-huruf" element={<QuizPageHuruf />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu-quiz" element={<MenuQuizPage />} />
        </Routes>
        </>
    )
}

export default RootLayout