import pantryBanner from '../../assets/PantryBanner.png';

function PantryBanner () {
  return (
    <div className='row m-0' id='pantry-container'>
      <img id='pantry' className='banner'  src={pantryBanner} alt='Pantry Banner' />
    </div>
  )
}

export default PantryBanner;