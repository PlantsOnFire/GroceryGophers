import './PantryPage.scss';
import PantryForm from '../../components/PantryForm/PantryForm';
import {ReactComponent as PantryBanner} from '../../assets/PantryBanner.svg';

function PantryPage () {
  return (
    <main>
      <PantryBanner />
      <div className='container'>
        <h1>Pantry Page</h1>
        <h2>This is what you have in your pantry</h2>
        <PantryForm />
      </div>

    </main>
  )
}

export default PantryPage;