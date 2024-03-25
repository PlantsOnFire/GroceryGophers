import PublicMessage from "../../../components/PublicMessage/PublicMessage";
import RecipesBanner from '../../../assets/Recipes-Banner.png';
import './RecipesPublicPage.scss';

function RecipesPublicPage () {
  return(
    <main>
      <img id='recipes-banner' src={RecipesBanner} alt='Recipes Banner' />
      <PublicMessage/>
    </main>
  )
}

export default RecipesPublicPage;