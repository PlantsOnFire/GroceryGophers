import PantryItem from './PantryItem/PantryItem';
import PantryForm from './PantryForm/PantryForm';
import './PantryList.scss';
import uuid from 'react-uuid';
import { useState } from 'react';

function PantryList () {
  const [pantryList, setPantryList] = useState([
    {id: uuid(), title: 'Apples', checked: false}
  ]);
  function handleAddItem(title) {
    const updatedPantryList = [...pantryList];
    updatedPantryList.push({id: uuid(), title: title, checked: false});
    setPantryList(updatedPantryList);
  }
  function handleSetToggle(id) {
    const updatedPantryList = [...pantryList];
    updatedPantryList.forEach(item => {
      if(item.id === id) {
        item.checked = !item.checked;
      }
    })
    setPantryList(updatedPantryList);
  }
  //==============REMOVE ALL PANTRY ITEMS =================
  const deleteList =()=>{
    setPantryList([]);
  }
  return(
    <div>
      <h3>My Pantry List</h3>
      {pantryList.map(item => <PantryItem key={item.id} item={item} onSetToggle={handleSetToggle}/>)}
      <PantryForm onFormSubmit={handleAddItem}/>
      <button onClick={deleteList}>Delete List</button>
    </div>
  )
}

export default PantryList;