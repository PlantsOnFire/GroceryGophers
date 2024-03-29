import './RecipePage';
import Recipes from '../../../components/Recipes/Recipes';
import RecipesBanner from '../../../components/Banners/RecipesBanner';

function RecipePage () {
  return (
    <main>
      <RecipesBanner/>
      <div className='container p-3'>
        <Recipes />
      </div>
    </main>
  )
}

export default RecipePage;