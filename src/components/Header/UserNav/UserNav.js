import logo from '../../../assets/gopherLogo.png';
import {Link, NavLink} from 'react-router-dom';

function UserNav () {
  return(
    <nav className='d-flex flex-wrap justify-content-between align-items-center p-4'>
      <div className='d-flex align-items-center px-4'>
        <img src={logo} alt='grocery gopher logo gopher holding grocery bag' id='logo' />
        <Link className='nav-link' to='/'><h1 className='d-inline'>Grocery Gopher</h1></Link>
      </div>
      <ul className='nav d-flex fs-4'>
        <li className='nav-item mb-2'>
        <NavLink to='/' className='nav-link'>Home</NavLink>
        </li>
        <li className='nav-item mb-2'>
          <NavLink to='/user/grocery-list' className='nav-link'>Grocery List</NavLink>
        </li>
        <li className='nav-item mb-2'>
          <NavLink to='/user/pantry' className='nav-link'>Pantry</NavLink>
        </li>
        <li className='nav-item mb-2'>
          <NavLink to='/user/recipes' className='nav-link'>Recipes</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default UserNav;