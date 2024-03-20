
import './nav.css';
import {  NavLink } from 'react-router-dom';
const Navbar = () => {

    const navLinks = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Contact",
            path: "/contact"
        }
    ]



  return (
    <div className='navbar'>
        <div className="logo">Logo</div>
        <div className="nav-items">
            <ul>
                {
                    navLinks.map((link) => {
                        return (
                            <li key={link.name}>
                                <NavLink  
                                 style={({ isActive }) => ({
                                    color: isActive ? '#fff' : '#545e6f',
                                    background: isActive ? '#3f51b5' : '#fff',
                                })}
                                to={link.path}>{link.name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default Navbar
