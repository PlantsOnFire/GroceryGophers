import './ContactPage.scss';
import ContactBanner from '../../components/Banners/ContactBanner';
import ContactForm from '../../components/ContactForm/ContactForm';

function ContactPage () {
  return(
    <main>
      <ContactBanner/>
      <div className='container p-5'>
        <h2>Contact The Gopher Team</h2>
        <div>Having Troubles with the site? <br/>
        Our team of gophers are here to help!<br/>
        Just fill out the form below and we will get back to you in a timely manner.</div>
        <br/>
        <h2>Contact Form</h2>
        <ContactForm/>
      </div>
    </main>
  )
}

export default ContactPage;