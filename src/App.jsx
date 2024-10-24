
import './App.css'
import Navbar from './components/navbar'
import Main from './components/Main'
import Services from './components/Services'
import Experience from './components/Experience'
import Carousel from './components/carousel'
import Contact from './components/Contact'
import Design from './components/Design'
import {themeContext} from './Context'
 import {useContext} from 'react'
import Aboutme from './components/Aboutme'
function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  // const darkMode = theme.current.darkMode
  return (
    <div className="App" style={{background : darkMode ? 'black' : '' , color : darkMode ? 'white'  : ''}}>
     <Navbar></Navbar>
     <Main></Main>
     <Services></Services>
     <Aboutme/>
     <Experience></Experience>
     <Carousel></Carousel>
     <Contact></Contact>
     <Design></Design>
    </div>
  )
}

export default App
