import './HomePage.scss';
import gghero from '../../assets/GG-Hero-2.0.png';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
  return(
    <main>
      <div className='row m-0' id='gg-hero-container'>
        <img id='gg-hero' src={gghero} alt='Grocery bag displaying join here' />
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
      <ul className="nav justify-content-around justify-items-center pb-2 text-center col mb-3 container">
        <li class="nav-item pb-2 text-center col">
          <NavLink to='/public/grocery-list' className='nav-link'>Grocery List</NavLink>
        </li>
        <li class="nav-item pb-2 text-center col">
          <NavLink to='/public/pantry' className='nav-link'>Pantry</NavLink>
        </li>
        <li class="nav-item pb-2 text-center col">
          <NavLink to='/public/recipes' className='nav-link'>Recipes</NavLink> 
        </li>
      </ul>
      <ul className="nav justify-content-around justify-items-center pb-2 text-center col mb-3 container">
        <li class="nav-item pb-2 text-center col">
          <NavLink to='/public/account' className='nav-link'>Account</NavLink>
        </li>
        <li class="nav-item pb-2 text-center col">
          <NavLink to='/contact' className='nav-link'>Contact</NavLink>
        </li>
        <li class="nav-item pb-2 text-center col">
          <NavLink to='/about' className='nav-link'>About</NavLink>
        </li>
      </ul>
      <div className='container p-5'>
        <h2>More Content Goes Here</h2>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim porttitor elit in cursus. Donec massa est, ultricies vitae semper dictum, euismod eget leo. Phasellus tincidunt eget ex eget ornare. Fusce condimentum velit non felis blandit lacinia. Donec tincidunt auctor turpis eu eleifend. Integer imperdiet convallis posuere. Sed tempor tortor quam, sit amet interdum purus molestie sed. Aliquam eget erat eget mauris suscipit efficitur. Praesent pellentesque tincidunt magna, a ultrices metus porta nec. Quisque posuere hendrerit sapien nec commodo. In rutrum nec libero a venenatis. Mauris molestie ligula id nibh aliquam, et lobortis massa semper. Etiam venenatis accumsan tortor, vitae mollis nisl suscipit sit amet. Ut turpis neque, placerat vitae elit eget, auctor luctus libero. Nulla consectetur mi eu arcu egestas laoreet.</div>
      </div>
    </main>
  )
}