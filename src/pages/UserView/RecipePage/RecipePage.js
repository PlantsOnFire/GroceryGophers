import './RecipePage';
import Recipes from '../../../components/Recipes/Recipes';

function RecipePage () {
  return (
    <main>
      <div className='container'>
        <h1>Recipe Page</h1>
        <Recipes />
      </div>
    </main>
  )
}

export default RecipePage;