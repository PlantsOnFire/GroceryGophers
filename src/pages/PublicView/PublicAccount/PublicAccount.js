import RegisterForm from "../../../components/RegisterForm/RegisterForm";
import LoginForm from "../../../components/LoginForm/LoginForm";
import { useState } from "react";
import './PublicAccount.scss';

function PublicAccount () {
  const [accountForm, setAccountForm] = useState('register');
  function toggleForm () {
    accountForm === 'register' ? setAccountForm('login') : setAccountForm('register');
  }
  return(
    <div className=''>
      {accountForm === 'register' 
        ? <>
        <div id='switch-form-background' className='mb-3'>
          <div id='switch-form' className='container-fluid text-center' onClick={toggleForm}>
            Already a user? Login here!
          </div>
        </div>

          <RegisterForm/>
        </>
        : <>
          <div id='switch-form-background' className='mb-3'>
            <div id='switch-form' className='container-fluid text-center' onClick={toggleForm}>
              Need to register for an account? Register here!
            </div>
          </div>
          <LoginForm/>
        </>
      }
      

      
    </div>
  )
}
export default PublicAccount;