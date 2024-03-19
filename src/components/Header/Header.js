import './Header.scss';

import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa6';
import {Link} from 'react-router-dom';
import PublicNav from './PublicNav/PublicNav';
import UserNav from './UserNav/UserNav';

export default function Header({isLoggedIn}) {

  return(
    // Need to change to fixed-top eventually, but that requires reworking of styles throughout
    <header /*className='fixed-top'R*/>
      <div className='container-fluid p-2' id='socials-login-bar'>
        <div className='d-flex flex-wrap align-items-center justify-content-center'>
          <div className='col'>
            <Link href='#'>
              <FaFacebook className='social-media'/>
            </Link>
            <Link href='#'>
              <FaTwitter className='social-media'/>
            </Link>
            <Link href='#'>
              <FaInstagram className='social-media'/>
            </Link>
          </div>
          <div className='text-end'>
            {isLoggedIn 
              ? <Link className='nav-link' to='/user/account'>Account</Link>
              : <Link className='nav-link' to='/public/account'>Login/Register</Link>
            }
          </div>
        </div>
      </div>
      {isLoggedIn
        ? <UserNav/>
        : <PublicNav/>
      }
    </header>
  )
}
