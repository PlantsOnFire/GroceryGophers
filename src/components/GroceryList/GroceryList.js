import GroceryItem from './GroceryItem/GroceryItem';
import GroceryForm from './GroceryForm/GroceryForm';
import './GroceryList.scss';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';
import apiRequest from '../../api/apiRequest';

function GroceryList () {
  const API_URL = 'http://localhost:8080/tasks';
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [groceryList, setGroceryList] = useState([]);

  //Gets DB and Updates UI
  const getFetchData = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error('Did not receive expected data');
      let listItems = await response.json();
      let editedList = (objArray) => {
        objArray.forEach(obj => {
          obj.id = obj._id;
          delete obj._id;
          delete obj.__v;
        })
      }
      editedList(listItems);
      console.log(listItems);
      setGroceryList(listItems);
      setFetchError(null);
    } catch (err) {
      console.log(err.message);
      setFetchError(err.message);
    } finally {
      setIsLoading(false);
      console.log(groceryList);
    }
  };
  
  //Get Fetch Data Once on Mount
  useEffect(()=> {getFetchData()}, []);

  //===============ADD NEW GROCERY-LIST ITEM=======================
  async function handleAddItem(description) {
    //Add to DB
    const newItem = {description: description};
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newItem)
    };
    const result = await apiRequest(API_URL, postOptions);//returns null or errMsg
    if (result) setFetchError(result);
    getFetchData(); //Update UI
  }

  //===============TOGGLE DONE STATUS=======================
  async function handleSetToggle(id) {
    const updatedGroceryList = [...groceryList];
    let myItem = {};
    updatedGroceryList.forEach(item => {
      if(item.id === id) {
        item.done = !item.done;
        myItem = item;
      }
    })
    setGroceryList(updatedGroceryList);

    //Change Status in DB
    // const myItem = groceryList.filter(item => item.id === id);
    console.log(myItem);
    const putOptions = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(myItem)
    };
      const reqURL = `${API_URL}/${id}`;
      const result = await apiRequest(reqURL, putOptions);
      if (result) setFetchError(result);
  }
  //==============REMOVE ALL GROCERY-LIST ITEMS =================
  const deleteList =()=>{
    setGroceryList([]);
  }

  return(
    <div>
      <h3>My Grocery List</h3>
      {isLoading 
        ?<div>Loading...</div>
        : fetchError 
          ? <div className='error'>{fetchError}</div>
          : groceryList.map(item => <GroceryItem key={item.id} item={item} onSetToggle={handleSetToggle}/>)
      }
      <GroceryForm onFormSubmit={handleAddItem}/>
      <button onClick={deleteList}>Delete List</button>
    </div>
  )
}

export default GroceryList;