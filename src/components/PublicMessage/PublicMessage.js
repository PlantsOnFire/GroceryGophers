import './PublicMessage.scss';
import { Link } from 'react-router-dom';

function PublicMessage () {
  return(
    <div className='container p-4'>
      <h2>Welcome to Grocery Gopher!</h2>
      <div>Grocery Gopher is a fun and exciting website that allows you to organize your grocery lists, view recipes, and keep track of items in your pantry!</div>
      <div>In order to use the functions of Grocery Gopher, you must create an account and login.</div>
      <div className='text-center fs-4 m-3'>
        <Link to='/public/account'>Click here to create an account!</Link>      
      </div>
    </div>
  )
}

export default PublicMessage;