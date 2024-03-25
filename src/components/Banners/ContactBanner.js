import contactBanner from '../../assets/ContactUsBannerTemp.png';

function ContactBanner () {
  return (
    <div className='row m-0' id='contact-container'>
      <img id='contactUs' src={contactBanner} alt='Contact Us Banner' />
    </div>
  )
}

export default ContactBanner;