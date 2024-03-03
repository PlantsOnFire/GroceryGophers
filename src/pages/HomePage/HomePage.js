import './HomePage.scss';
import gghero from '../../assets/GG-Hero.png';

export default function HomePage() {
  return(
    <main>
      <div className='row m-0' id='gg-hero-container'>
        <img id='gg-hero' src={gghero} alt='Grocery bag displaying join here' />
      </div>
    </main>
  )
}