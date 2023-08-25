import { NavLink } from "react-router-dom";
import logo from '../../images/logo.png';

const Nav = () => {
  return (
    <>
      <nav className="nav-container">
        <NavLink to='/' className="homepage-btn"> Home </NavLink>
        <image src={logo} alt="in-the-field-logo" />
        <NavLink to='/myfieldguide' className='my-field-guide-btn'>My Field Guide</NavLink>
      </nav>
    </>
  )
};

export default Nav