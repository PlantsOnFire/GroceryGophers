import './RegisterForm.scss';
import {useState} from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa6";

function RegisterForm () {
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [userError, setUserError] = useState([]);
  const [passError1, setPassError1] = useState([]);
  const [passError2, setPassError2] = useState([]);
  const [passVis1, setPassVis1] = useState('password');
  const [passVis2, setPassVis2] = useState('password');

  function toggleVisibility1 () {
    passVis1 === 'password' ? setPassVis1('text') : setPassVis1('password');
  };
  function toggleVisibility2 () {
    passVis2 === 'password' ? setPassVis2('text') : setPassVis2('password');
  };

  function validateForm (event) {
    event.preventDefault();
    const regexUser = /^[0-9A-Za-z]$/;    
    const regexPass = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z])$/;
    //=========Check Username==========
      let userErrors = [];
      //Check for form field username blank
      username === '' && userErrors.push('Username field cannot be blank.');
      //Does username exist in database

      //Is username longer than 5 characters and less than 20
      username.length < 5 & username.length > 21 && userErrors.push('Username must be between 6-20 characters.');
      //Can only contains letters and numbers
      !regexUser.test(username) && userErrors.push('Username can only contain letters and numbers.');
      setUserError(userErrors);

    //=========Check Passwords==========
      let password1Errors = [];
      let password2Errors = [];
      //Check for form field password blank
      password1 === '' && password1Errors.push('Password cannot be blank.');
      password2 === '' && password2Errors.push('Password cannot be blank.');
      //Does password contain an uppercase, lowercase, and special character and 8 characters
      !regexPass.test(password1) && password1Errors.push('Password must contain at least one number, one uppercase, one lowercase, and one special character.');
      //Do passwords match
      password1 !== password2 && password2Errors.push('Passwords must match.');

      setPassError1(password1Errors);
      setPassError2(password2Errors);
    //=========Register User==========

  }
  return(
    <form onSubmit={validateForm} className='container'>
      <h2>Register for an Account</h2>
        <div className="form-group m-3">
          <label htmlFor='username' className='col'>User Name:</label>
          <input className="form-control" type='text' id='username' placeholder='User Name' value={username} maxLength={30} onChange={(e) => setUsername(e.target.value)}/>
          {userError.length > 0 &&
            userError.map(item => <div className="form-text error">{item}</div>)
          }
        </div>
        <div className="form-group m-3">
          <label htmlFor='password1' className='col'>Password:</label>
          <input className="form-control" type={passVis1} id='password1' placeholder='Password' value={password1} maxLength={30} onChange={(e) => setPassword1(e.target.value)}/>
          <div onClick={toggleVisibility1} id='vis-toggle'>{passVis1 === 'password' ? <FaEyeSlash /> : <FaEye />}</div>
          {passError1.length > 0 &&
            passError1.map(item => <div className="form-text error">{item}</div>)
          }
        </div>
        <div className="form-group m-3">
          <label htmlFor='password2' className='col'>Re-Type Password:</label>
          <input className="form-control col" type={passVis2} id='password2' placeholder='Password' value={password2} maxLength={30} onChange={(e) => setPassword2(e.target.value)}/>
          <div onClick={toggleVisibility2} id='vis-toggle'>{passVis2 === 'password' ? <FaEyeSlash /> : <FaEye />}</div>
          {passError2.length > 0 &&
            passError2.map(item => <div className="form-text error">{item}</div>)
          }
        </div>
      <button type='submit' className='m-3'>Register</button>
    </form>
  )
}

export default RegisterForm;