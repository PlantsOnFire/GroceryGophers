import GroceryItem from './GroceryItem/GroceryItem';
import GroceryForm from './GroceryForm/GroceryForm';
import './GroceryList.scss';

function GroceryList () {
  return(
    <div>
      <h3>THIS IS A GROCERY LIST</h3>
      <GroceryItem />
      <GroceryForm />
    </div>
  )
}

export default GroceryList;