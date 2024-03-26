import './HomePage.scss';
import gghero from '../../assets/GG-Hero-2.0.png';
import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function HomePage({isLoggedIn}) {
  const [links, setLinks] = useState('');
  useEffect(() => {
    isLoggedIn 
      ? setLinks([
        '/user/grocery-list',
        '/user/pantry',
        '/user/recipes',
        '/user/account',
      ]) 
      : setLinks([
        '/public/grocery-list',
        '/public/pantry',
        '/public/recipes',
        '/public/account',
      ]);
  }, [isLoggedIn])
  return(
    <main>
      <div className='row m-0' id='gg-hero-container'>
        <Link to={links[3]}><img id='gg-hero' src={gghero} alt='Grocery bag displaying join here' /></Link>
      </div>
      <div className='container p-5'>
        <h2>Welcome to Grocery Gopher.</h2>
        <div>
          <br/>
          <h4>Have You ever had a pantry full of one ingredient or fruit/vegetables go bad?</h4>
          Here you have the chance to create grocery lists, pantry lists, and get recipes at the palm of your hand.<br/>
          With the help of this handy site you will always know what you have on hand and what you will need to pick up.<br/>
          Preventing yourself from a pantry full of one ingredient or having your stock of vegetables go bad.
        </div>
      </div>
      <ul id='link-boxes' className="nav justify-content-around justify-items-center pb-2 text-center col mb-3 container">
        <li className="nav-item pb-2 text-center col">
          <NavLink to={links[0]} className='nav-link'>Grocery List</NavLink>
        </li>
        <li className="nav-item pb-2 text-center col">
          <NavLink to={links[1]} className='nav-link'>Pantry</NavLink>
        </li>
        <li className="nav-item pb-2 text-center col">
          <NavLink to={links[2]} className='nav-link'>Recipes</NavLink> 
        </li>
      </ul>
      <ul className="nav justify-content-around justify-items-center pb-2 text-center col mb-5 container">
        <li className="nav-item pb-2 text-center col">
          <NavLink to={links[3]} className='nav-link'>Account</NavLink>
        </li>
        <li className="nav-item pb-2 text-center col">
          <NavLink to='/contact' className='nav-link'>Contact</NavLink>
        </li>
        <li className="nav-item pb-2 text-center col">
          <NavLink to='/about' className='nav-link'>About</NavLink>
        </li>
      </ul>
    </main>
  )
}