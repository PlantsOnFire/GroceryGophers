import groceryListBanner from '../../assets/GroceryListBanner.png';

function GroceryListBanner () {
  return (
    <div className='row m-0' id='grocery-list-container'>
      <img className='banner' id='groceryList' src={groceryListBanner} alt='Grocery List Banner' />
    </div>
  )
}

export default GroceryListBanner;