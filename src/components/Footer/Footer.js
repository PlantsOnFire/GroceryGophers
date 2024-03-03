import './Footer.scss';

function Footer () {
  return(
    <footer className='row p-5 pb-3 align-items-start m-0'>
      <div className='col'><h5>&copy; CAL Corp</h5></div>
        <div className='col text-end'>
          <h5>Grocery Gopher</h5>
          <ul className='nav flex-column'>
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
        </div>
        <div className='col  text-end'>
          <h5>More Information</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link'>Account</a>
            </li>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link'>Contact</a>
            </li>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link'>About</a>
            </li>
          </ul>
      </div>
    </footer>
  )
}

export default Footer;