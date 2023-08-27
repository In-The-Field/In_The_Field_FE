import './Nav.css'
import { NavLink } from "react-router-dom";
import logo from '../../images/logo.png';

const Nav = () => {
  return (
    <>
      <nav className="nav-container">
        <img src={logo} className='logo' alt="in-the-field-logo" />
        <div className="link-container">
          <NavLink to='/' className="homepage-btn"> Home </NavLink>
          <NavLink to='/myfieldguide' className='my-field-guide-btn'>My Field Guide</NavLink>
        </div>
      </nav>
    </>
  )
};

export default Nav