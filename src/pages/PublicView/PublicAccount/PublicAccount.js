import RegisterForm from "../../../components/RegisterForm/RegisterForm";
import LoginForm from "../../../components/LoginForm/LoginForm";
import { useState } from "react";
import './PublicAccount.scss';
import AccountBanner from "../../../components/Banners/AccountBanner";

function PublicAccount ({isLoggedIn, setLoggedIn}) {
  const [accountForm, setAccountForm] = useState('register');
  function toggleForm () {
    accountForm === 'register' ? setAccountForm('login') : setAccountForm('register');
  }
  return(
    <main>
      <AccountBanner/>
      {accountForm === 'register' 
        ? <>
        <div id='switch-form-background' className='mb-3'>
          <div id='switch-form' className='container-fluid text-center' onClick={toggleForm}>
            Already a user? LOGIN here!
          </div>
        </div>

          <RegisterForm setAccountForm={setAccountForm}/>
        </>
        : <>
          <div id='switch-form-background' className='mb-3'>
            <div id='switch-form' className='container-fluid text-center' onClick={toggleForm}>
              Need to register for an account? REGISTER here!
            </div>
          </div>
          <LoginForm isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>
        </>
      }
    </main>
  )
}
export default PublicAccount;