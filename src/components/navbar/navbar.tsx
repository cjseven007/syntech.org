import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/events">Events</NavLink>
    <NavLink to="/blog">Blog</NavLink>
    <NavLink to="/about">About Us</NavLink>
    
    </>
  )
}

export default NavBar