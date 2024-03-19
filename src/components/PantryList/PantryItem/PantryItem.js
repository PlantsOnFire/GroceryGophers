import './PantryItem.scss';
import { FaRegSquareFull, FaRegSquareCheck } from "react-icons/fa6";

function PantryItem (props) {
  
  const item = props.item;

  function handleCheckClick () {
    props.onSetToggle(item.id);
  }

  return (
    <div className='row fs-3 align-items-center'>
      <div className='col-1 my-2'>
        {item.checked ? <FaRegSquareCheck onClick={handleCheckClick}/> : <FaRegSquareFull onClick={handleCheckClick}/>}
      </div>
      <div className='col'>{item.title}</div>
      <hr/>
    </div>
  )
}

export default PantryItem;