import GroceryList from '../../../components/GroceryList/GroceryList';
import uuid from 'react-uuid';
import './GroceryListPage.scss';
import {ReactComponent as GroceryListBanner} from '../../../assets/GroceryListBanner-01.svg';

function GroceryListPage () {

  return(
    <main>
      <GroceryListBanner />
      <div className='container my-4'>
        <div id='grocery-list'>
          {

          }
          <GroceryList />
        </div>
      </div>
    </main>
  )
}

export default GroceryListPage;