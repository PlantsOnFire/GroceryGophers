import './GroceryItem.scss';
import { FaRegSquareFull, FaRegSquareCheck } from "react-icons/fa6";

function GroceryItem (props) {
  const item = props.item;
  function handleCheckClick () {
    props.onSetToggle(item.id);
  }
  function handleDeleteItem () {
    props.onDeleteItem(item.id)
  }

  return (
    <div className='row fs-3 align-items-center'>
      <div className='col-1 my-2'>
        {item.done ? <FaRegSquareCheck onClick={handleCheckClick}/> : <FaRegSquareFull onClick={handleCheckClick}/>}
      </div>
      <div className='col'>{item.description}</div>
      <button className='col-1' onClick={handleDeleteItem}>Delete</button>
      <hr/>
    </div>
  )
}

export default GroceryItem;