import GroceryItem from './GroceryItem/GroceryItem';
import GroceryForm from './GroceryForm/GroceryForm';
import './GroceryList.scss';
import uuid from 'react-uuid';
import { useState } from 'react';

function GroceryList () {
  const [groceryList, setGroceryList] = useState([
    {id: uuid(), title: 'Apples', checked: false}
  ]);
  function handleAddItem(title) {
    const updatedGroceryList = [...groceryList];
    updatedGroceryList.push({id: uuid(), title: title, checked: false});
    setGroceryList(updatedGroceryList);
  }
  function handleSetToggle(id) {
    const updatedGroceryList = [...groceryList];
    updatedGroceryList.forEach(item => {
      if(item.id === id) {
        item.checked = !item.checked;
      }
    })
    setGroceryList(updatedGroceryList);
  }
  return(
    <div>
      <h3>My Grocery List</h3>
      {groceryList.map(item => <GroceryItem key={item.id} item={item} onSetToggle={handleSetToggle}/>)}
      <GroceryForm onFormSubmit={handleAddItem}/>
    </div>
  )
}

export default GroceryList;