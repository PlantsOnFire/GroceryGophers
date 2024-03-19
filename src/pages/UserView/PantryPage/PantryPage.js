import './PantryPage.scss';
import {ReactComponent as PantryBanner} from '../../../assets/PantryBanner.svg';
import PantryList from '../../../components/PantryList/PantryList';

function PantryPage () {
  return (
      <main>
      <PantryBanner />
      <div className='container my-4'>
        <div id='pantry'>
          {

          }
          <PantryList />
        </div>
      </div>
    </main>
  )
}

export default PantryPage;