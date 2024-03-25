import { NavLink } from 'react-router-dom';
import PageErrorBanner from '../../components/Banners/PageErrorBanner';
import './PageNotFound.scss';

function PageNotFound () {
  return(
    <main>
      <PageErrorBanner/>
      <div className='container p-5'>
        <h2>Error 404</h2>
        <div>
          <p>Sorry this page doesn't exist click the button below to return to Home!</p><br/>
          <NavLink to={'/'}>Home Page</NavLink>
        </div>
      </div>
    </main>
  )
}

export default PageNotFound;