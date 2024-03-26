import './AboutUsPage.scss';
import AboutBanner from '../../components/Banners/AboutBanner';

function AboutUsPage () {
  return(
    <main>
      <AboutBanner/>
      <div className='container p-5'>
        <h2>About Grocery Gpoher</h2>
        <div>Grocery Gopher was created by CAL corp. <br/>
        It was crafted in order to help people who can't remember what is in their pantry while shopping.<br/>
        It was also crafted to keep track of the groceries that you need to pick up when out.<br/>
        It does provide some recipes and with hopes of becoming more useful with recipes provided to users from ingredients in their pantry.<br/>
        Gorcery Gopher is a great site to help with all your grocery needs.</div>
        <br/>
        <h2>About CAL Corp.</h2>
        <div>CAL corp is made up of a group of Fanshawe College graduates.<br/>
        Our goal is to provide companies with well designed and programmed websited and applications.<br/>
        We are a new company with only personal programs under our belt.<br/> 
        We strive to learn new and inovative tecniques to aid in creating the best products.<br/>
        We create web sites, mobile apps and more. </div>
      </div>
    </main>
  )
}

export default AboutUsPage;