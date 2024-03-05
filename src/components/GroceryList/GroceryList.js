import GroceryItem from './GroceryItem/GroceryItem';
import GroceryForm from './GroceryForm/GroceryForm';
import './GroceryList.scss';

import {useSelector, useDispath} from 'react-redux';
import {addItem, deleteItem, UpdateItem} from '../../redux/slices/grocerySlice';

function GroceryList () {
  return(
    <div>
      <h3>My Grocery List</h3>
      <GroceryItem />
      <GroceryForm />
    </div>
  )
}

export default GroceryList;