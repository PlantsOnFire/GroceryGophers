import './Footer.scss';
import { NavLink } from 'react-router-dom';

function Footer () {
  return(
    <footer className='py-3'>
      <ul className="nav justify-content-around justify-items-center pb-2 text-center col mb-3 container">
        <li class="nav-item pb-2 text-center col">
          <NavLink to='/' className='nav-link'>Home</NavLink>
        </li>
        <li class="nav-item pb-2 text-center col">
          <NavLink to='/grocery-list' className='nav-link'>Grocery List</NavLink>
        </li>
        <li class="nav-item pb-2 text-center col">
          <NavLink to='/pantry' className='nav-link'>Pantry</NavLink>
        </li>
        <li class="nav-item pb-2 text-center col">
          <NavLink to='/recipes' className='nav-link'>Recipes</NavLink>
        </li>
        <li class="nav-item pb-2 text-center col">
          <NavLink to='/account' className='nav-link'>Account</NavLink>
        </li>
        <li class="nav-item pb-2 text-center col">
          <NavLink to='/contact' className='nav-link'>Contact</NavLink>
        </li>
        <li class="nav-item pb-2 text-center col">
          <NavLink to='/about' className='nav-link'>About</NavLink>
        </li>
      </ul>
      {/* <ul className="nav justify-content-center border-bottom pb-2 text-center col mb-3">
      </ul> */}
      <div className="nav justify-content-center justify-items-center pb-2 text-center col mb-3">&copy; CAL Corp</div>
    </footer>
  )
}

export default Footer;