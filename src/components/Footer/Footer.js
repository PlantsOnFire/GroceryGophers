import './Footer.scss';
import { NavLink } from 'react-router-dom';
import {ReactComponent as CALCorp} from '../../assets/CALCorp.svg';

function Footer ({isLoggedIn}) {
  return(
    <footer className='py-3 pb-0'>
      <ul className="nav justify-content-around justify-items-center pb-2 text-center col mb-3 container">
        <li className="nav-item pb-2 text-center col">
          <NavLink to='/' className='nav-link'>Home</NavLink>
        </li>
        <li className="nav-item pb-2 text-center col">
          {isLoggedIn ? <NavLink to='/user/grocery-list' className='nav-link'>Grocery List</NavLink> : <NavLink to='/public/grocery-list' className='nav-link'>Grocery List</NavLink>}
        </li>
        <li className="nav-item pb-2 text-center col">
          {isLoggedIn ? <NavLink to='/user/pantry' className='nav-link'>Pantry</NavLink> : <NavLink to='/public/pantry' className='nav-link'>Pantry</NavLink>}
        </li>
        <li className="nav-item pb-2 text-center col">
          {isLoggedIn ? <NavLink to='/user/recipes' className='nav-link'>Recipes</NavLink> :  <NavLink to='/public/recipes' className='nav-link'>Recipes</NavLink> }
        </li>
        <li className="nav-item pb-2 text-center col">
          {isLoggedIn ? <NavLink to='/user/account' className='nav-link'>Account</NavLink> : <NavLink to='/public/account' className='nav-link'>Account</NavLink>}
        </li>
        <li className="nav-item pb-2 text-center col">
          <NavLink to='/contact' className='nav-link'>Contact</NavLink>
        </li>
        <li className="nav-item pb-2 text-center col">
          <NavLink to='/about' className='nav-link'>About</NavLink>
        </li>
      </ul>
      {/* <ul className="nav justify-content-center border-bottom pb-2 text-center col mb-3">
      </ul> */}
      <div className="nav justify-content-center justify-items-center pb-2 text-center col">
        <CALCorp id='cal-corp-logo'/>
      </div>
    </footer>
  )
}

export default Footer;