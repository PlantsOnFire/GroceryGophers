import './LoginForm.scss';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa6";

function LoginForm () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setUserError] = useState([]);
  const [passError, setPassError] = useState([]);
  const [passVis, setPassVis] = useState('password');

  function toggleVisibility () {
    passVis === 'password' ? setPassVis('text') : setPassVis('password');
  };

  function validateForm() {
    //Check for form field username blank
    //Check for form field password blank
    //Check for username and password in the Database
  }

  return(
    <form onSubmit={validateForm} className='container'>
      <h2>User Login</h2>
        <div className="form-group m-3">
          <label htmlFor='username' className='col'>User Name:</label>
          <input className="form-control" type='text' id='username' placeholder='User Name' value={username} maxLength={30} onChange={(e) => setUsername(e.target.value)}/>
          {userError.length > 0 &&
            <div className="form-text error">{userError}</div>
          }
        </div>
        <div className="form-group m-3">
          <label htmlFor='password' className='col'>Password:</label>
          <input className="form-control" type={passVis} id='password' placeholder='Password' value={password} maxLength={30} onChange={(e) => setPassword(e.target.value)}/>
          <div onClick={toggleVisibility} id='vis-toggle'>{passVis === 'password' ? <FaEyeSlash /> : <FaEye />}</div>
          {passError.length > 0 &&
            <div className="form-text error">{passError}</div>
          }
        </div>
      <button type='submit' className='m-3'>Login</button>
    </form>
  )
}

export default LoginForm;