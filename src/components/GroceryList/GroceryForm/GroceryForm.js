import './GroceryForm.scss';
import uuid from 'react-uuid';
import {useState} from 'react';


function GroceryForm (props) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  function submitItem(e) {
    e.preventDefault();
    const validate = [];
    title === '' && validate.push({message: 'Field cannot be empty.', id: 'empty-title'});
    title.length > 30 && validate.push({message: 'Grocery item cannot be longer than 30 characters', id: 'long-title'});
    setError(validate);
    if (validate.length === 0) {
      props.onFormSubmit(title);
      setTitle('');
    }
  }

  return (
    <form onSubmit={submitItem} className='row'>
      <input className='col-2' type='text' id='grocery-item' placeholder='Type next grocery item' value={title} maxLength={30} onChange={(e) => setTitle(e.target.value)}/>
      <button className='col-2' type='submit'>Add Item</button>
    </form>
  )
}

export default GroceryForm;