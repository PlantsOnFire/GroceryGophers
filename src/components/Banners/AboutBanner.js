import aboutBanner from '../../assets/AboutUsBannerTemp.png';

function AboutBanner () {
  return (
    <div className='row m-0 banner' id='about-container'>
      <img id='aboutUs' src={aboutBanner} alt='About Us Banner' />
    </div>
  )
}

export default AboutBanner;