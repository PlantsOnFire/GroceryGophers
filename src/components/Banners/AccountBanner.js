import accountBanner from '../../assets/AccountBanner.png';

function AccountBanner () {
  return (
    <div className='row m-0 banner' id='account-container'>
      <img className='banner' id='account' src={accountBanner} alt='Account Banner' />
    </div>
  )
}

export default AccountBanner;