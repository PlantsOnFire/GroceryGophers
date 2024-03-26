import './RecipeItem.scss';
// import image from '../../../assets/recipes/burger.jpg';


function RecipeItem ({item}) {
  const image = require('../../../assets/recipes/' + item.image);
  return (
    <div className='col-md-6 col-lg-4 my-3'>
      <div className='recipe-item p-4'>
        <h3>{item.title}</h3>
        <div className='mb-3 item-description'>{item.description}</div>
        <img className='recipe-image justify-center mb-3' src={image}/>
        <h4>Ingredients:</h4>
        <div className='scroll-container mb-3'>
          <ul>
            {item.ingredients.map((item, index)=><li key={index}>{item}</li>)}
          </ul>        
        </div>
        <h4>Directions:</h4>
        <ol>
          {item.directions.map((item, index)=><li key={index}>{item}</li>)}
        </ol>        
      </div>

    </div>
  )
}

export default RecipeItem;