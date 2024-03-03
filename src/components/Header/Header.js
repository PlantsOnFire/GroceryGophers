import './Header.scss';

export default function Header() {
  return(
    <header>
      <div className='container-fluid p-2' id='socials-login-bar'>
        <div className='d-flex flex-wrap align-items-center justify-content-center'>
          <div className='col'>
            SOCIAL MEDIA LINKS
          </div>
          <div className='text-end'>
            ACCOUNT LOGIN LINKS
          </div>
        </div>        
      </div>
      
      <nav className='d-flex flex-wrap justify-content-between align-items-center m-5'>
        <div>
          <span>LOGO</span>
          <h1 className='d-inline'>Grocery Gopher</h1>
        </div>
        <ul className='nav d-flex'>
          <li className='nav-item mb-2'>
            <a href='#' className='nav-link'>Home</a>
          </li>
          <li className='nav-item mb-2'>
            <a href='#' className='nav-link'>Grocery List</a>
          </li>
          <li className='nav-item mb-2'>
            <a href='#' className='nav-link'>Pantry</a>
          </li>
          <li className='nav-item mb-2'>
            <a href='#' className='nav-link'>Recipes</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
