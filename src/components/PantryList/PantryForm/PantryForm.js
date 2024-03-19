import './PantryForm.scss';
import { useState } from 'react';

function PantryForm (props) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  function submitItem(e) {
    e.preventDefault();
    const validate = [];
    title === '' && validate.push({message: 'Field cannot be empty.', id: 'empty-title'});
    title.length > 30 && validate.push({message: 'Pantry item cannot be longer than 30 characters', id: 'long-title'});
    setError(validate);
    if (validate.length === 0) {
      props.onFormSubmit(title);
      setTitle('');
    }
  }

  return (
    <form onSubmit={submitItem} className='row'>
      <input className='col-2' type='text' id='pantry-item' placeholder='Type next pantry item' value={title} maxLength={30} onChange={(e) => setTitle(e.target.value)}/>
      <button className='col-2' type='submit'>Add Item</button>
    </form>
  )
}

export default PantryForm;