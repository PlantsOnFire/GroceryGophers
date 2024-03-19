import './GroceryForm.scss';
import uuid from 'react-uuid';
import {useState} from 'react';


function GroceryForm (props) {
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  function submitItem(e) {
    e.preventDefault();
    const validate = [];
    description === '' && validate.push({message: 'Field cannot be empty.', id: 'empty-description'});
    description.length > 30 && validate.push({message: 'Grocery item cannot be longer than 30 characters', id: 'long-description'});
    setError(validate);
    if (validate.length === 0) {
      props.onFormSubmit(description);
      setDescription('');
    }
  }

  return (
    <form onSubmit={submitItem} className='row'>
      <input className='col-2' type='text' id='grocery-item' placeholder='Type next grocery item' value={description} maxLength={30} onChange={(e) => setDescription(e.target.value)}/>
      <button className='col-2' type='submit'>Add Item</button>
    </form>
  )
}

export default GroceryForm;