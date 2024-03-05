import './Header.scss';

import logo from '../../assets/gopherLogo.png';
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa6';

export default function Header() {
  return(
    // Need to change to fixed-top eventually, but that requires reworking of styles throughout
    <header /*className='fixed-top'R*/>
      <div className='container-fluid p-2' id='socials-login-bar'>
        <div className='d-flex flex-wrap align-items-center justify-content-center'>
          <div className='col'>
            <a href='#'>
              <FaFacebook className='social-media'/>              
            </a>
            <a href='#'>
              <FaTwitter className='social-media'/>
            </a>
            <a href='#'>
              <FaInstagram className='social-media'/>
            </a>
          </div>
          <div className='text-end'>
            <a href='/account' className='nav-link'>LOGIN</a>
          </div>
        </div>        
      </div>
      
      <nav className='d-flex flex-wrap justify-content-between align-items-center p-4'>
        <div className='d-flex align-items-center px-4'>
          <img src={logo} alt='grocery gopher logo gopher holding grocery bag' id='logo' />
          <h1 className='d-inline'>Grocery Gopher</h1>
        </div>
        <ul className='nav d-flex fs-4'>
          <li className='nav-item mb-2'>
            <a href='/' className='nav-link'>Home</a>
          </li>
          <li className='nav-item mb-2'>
            <a href='/grocery-list' className='nav-link'>Grocery List</a>
          </li>
          <li className='nav-item mb-2'>
            <a href='/pantry' className='nav-link'>Pantry</a>
          </li>
          <li className='nav-item mb-2'>
            <a href='/recipes' className='nav-link'>Recipes</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
