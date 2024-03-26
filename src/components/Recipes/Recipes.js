import './Recipes.scss';
import RecipeItem from './RecipeItem/RecipeItem';

function Recipes () {
  const recipes = require('../../data/recipes.json');
  console.log(recipes);
  return(
    <div>
      <h2>Browse our Collection of Recipes!</h2>
      <div className='fs-5'>Get inspiration for meals or ideas for what to add to your grocery list!</div>
      <div className='row mt-4'>
        {recipes.map((item, index) => <RecipeItem key={index} item={item} />)}        
      </div>
    </div>
  )
}

export default Recipes;