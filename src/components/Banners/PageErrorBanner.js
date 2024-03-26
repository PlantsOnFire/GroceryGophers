import pageErrorBanner from '../../assets/PageErrorBanner.png';

function PageErrorBanner () {
  return (
    <div className='row m-0' id='error-banner'>
      <img id='error' className='banner'  src={pageErrorBanner} alt='Page Error Banner' />
    </div>
  )
}

export default PageErrorBanner;