import GroceryList from '../../../components/GroceryList/GroceryList';
import uuid from 'react-uuid';
import './GroceryListPage.scss';
import GroceryListBanner from '../../../components/Banners/GroceryListBanner';

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