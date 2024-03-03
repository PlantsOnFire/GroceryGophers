import GroceryList from '../../components/GroceryList/GroceryList';
import './GroceryListPage.scss';

function GroceryListPage () {
  return(
    <main>
      <div className='container'>
        <h1>Grocery List Page</h1>
        <div id='grocery-list'>
          <h2>Your Grocery List</h2>
          <GroceryList />
        </div>
      </div>
    </main>
  )
}

export default GroceryListPage;