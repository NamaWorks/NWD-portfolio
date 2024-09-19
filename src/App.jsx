import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import BottomBar from './Components/UI/BottomBar/BottomBar'
import Projects from './pages/Projects/Projects'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Projects/>
    <BottomBar/>
    </>
  )
}

export default App
