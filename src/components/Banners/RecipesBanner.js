import recipesBanner from '../../assets/Recipes-Banner.png';

function RecipesBanner () {
  return (
    <div className='row m-0' id='recipes-container'>
      <img id='recipes' className='banner' src={recipesBanner} alt='Recipes Banner' />
    </div>
  )
}

export default RecipesBanner;