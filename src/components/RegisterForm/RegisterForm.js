import './RegisterForm.scss';
import {useState} from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import apiRequest from '../../api/apiRequest';

function RegisterForm (props) {
  const API_URL = 'http://localhost:8080/register';
  const [fetchError, setFetchError] = useState(null);
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [userError, setUserError] = useState([]);
  const [passError1, setPassError1] = useState([]);
  const [passError2, setPassError2] = useState([]);
  const [passVis1, setPassVis1] = useState('password');
  const [passVis2, setPassVis2] = useState('password');
  const [success, setSuccess] = useState(null);

  //=========Password Visibility============
  function toggleVisibility1 () {
    passVis1 === 'password' ? setPassVis1('text') : setPassVis1('password');
  };
  function toggleVisibility2 () {
    passVis2 === 'password' ? setPassVis2('text') : setPassVis2('password');
  };

  //============Validate Form===============
  function validateForm (event) {
    event.preventDefault();
    const regexUser = "^[A-Za-z][A-Za-z0-9_]{1,30}$";
    const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;

    //=========Check Username==========
      let userErrors = [];
      //Check for form field username blank
      username === '' && userErrors.push('Username field cannot be blank.');
      //Is username longer than 5 characters and less than 20
      if (username.length < 6 || username.length > 20) {userErrors.push('Username must be between 6-20 characters.')};
      //Can only contains letters and numbers
      !username.match(regexUser) && userErrors.push('Username can only contain letters and numbers. Must start with a letter. Special character underscore allowed only.');
      setUserError(userErrors);

    //=========Check Passwords==========
      let password1Errors = [];
      let password2Errors = [];
      //Check for form field password blank
      password1 === '' && password1Errors.push('Password cannot be blank.');
      password2 === '' && password2Errors.push('Password cannot be blank.');
      //Does password contain an uppercase, lowercase, and special character and 8-15 characters
      !password1.match(regexPass) && password1Errors.push('Password must contain at least one number, one uppercase, one lowercase, and one special character and be between 8-16 characters.');
      //Do passwords match
      password1 !== password2 && password2Errors.push('Passwords must match.');

      setPassError1(password1Errors);
      setPassError2(password2Errors);

    //=========Register User==========
    if (passError1.length === 0 && passError2.length === 0 && userError.length === 0) {
      handleAddUser();
    }
  }

  //============Create User on DB===========
  async function handleAddUser() {
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({user: username, pwd: password1})
    };
    setFetchError(null);
    setSuccess(null);
    const result = await apiRequest(API_URL, postOptions);
    if (result.errMsg) setFetchError(result.errMsg);
    //======Update UI to tell user their account is created!======
    setSuccess(result.response.success);
  }
  return(
    <form onSubmit={validateForm} className='container'>
      <h2>Register for an Account</h2>
        <div className="form-group m-3">
          <label htmlFor='username' className='col'>User Name:</label>
          <input className="form-control" type='text' id='username' placeholder='User Name' value={username} maxLength={30} onChange={(e) => setUsername(e.target.value)}/>
          {userError.length > 0 &&
            userError.map((item, index) => <div key={index} className="form-text error">{item}</div>)
          }
        </div>
        <div className="form-group m-3">
          <label htmlFor='password1' className='col'>Password:</label>
          <input className="form-control" type={passVis1} id='password1' placeholder='Password' value={password1} maxLength={30} onChange={(e) => setPassword1(e.target.value)}/>
          <div onClick={toggleVisibility1} id='vis-toggle'>{passVis1 === 'password' ? <FaEyeSlash /> : <FaEye />}</div>
          {passError1.length > 0 &&
            passError1.map((item, index) => <div key={index} className="form-text error">{item}</div>)
          }
        </div>
        <div className="form-group m-3">
          <label htmlFor='password2' className='col'>Re-Type Password:</label>
          <input className="form-control col" type={passVis2} id='password2' placeholder='Password' value={password2} maxLength={30} onChange={(e) => setPassword2(e.target.value)}/>
          <div onClick={toggleVisibility2} id='vis-toggle'>{passVis2 === 'password' ? <FaEyeSlash /> : <FaEye />}</div>
          {passError2.length > 0 &&
            passError2.map((item, index) => <div key={index} className="form-text error">{item}</div>)
          }
        </div>
      <button type='submit' className='m-3'>Register</button>
      {fetchError &&
        <div className='fs-4 error text-center mb-4'>{fetchError}</div>
      }
      {success &&
        <div className='text-center'>
          <div className='fs-4 success text-center mb-4'>{success}</div>
          <button className='mb-4' onClick={()=>props.setAccountForm('login')}>Login Now!</button>        
        </div>
      }
    </form>
  )
}

export default RegisterForm;