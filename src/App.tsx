
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/navbar/navbar'
import HomePage from './pages/homePage/home_page'
import EventPage from './pages/eventPage/event_page'
import BlogPage from './pages/blogPage/blog_page'
import AboutPage from './pages/aboutPage/about_page'

function App() {
 

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/events' element={<EventPage/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
    </>
  )
}

export default App
