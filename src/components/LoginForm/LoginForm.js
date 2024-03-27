import './LoginForm.scss';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import apiRequest from '../../api/apiRequest';
import { useNavigate } from 'react-router-dom';

function LoginForm ({isLoggedIn, setLoggedIn}) {
  const API_URL = 'http://localhost:8080/auth';
  const [fetchError, setFetchError] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setUserError] = useState([]);
  const [passError, setPassError] = useState([]);
  const [passVis, setPassVis] = useState('password');
  const navigate = useNavigate();

  function toggleVisibility () {
    passVis === 'password' ? setPassVis('text') : setPassVis('password');
  };

  function validateForm(event) {
    event.preventDefault();
    console.log('submit');
    let userErrors = [];
    let passErrors = []
    //Check for form field username blank
    username === '' && userErrors.push('Username field cannot be blank.');
    //Check for form field password blank
    password === '' && passErrors.push('Password field cannot be blank.');
    setUserError(userErrors);
    setPassError(passErrors);
    if (userError.length === 0 && passError.length === 0) {
      handleAuthUser();
      console.log('no errors');
    }
  }

  //Auth user on DB
  async function handleAuthUser() {
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({user: username, pwd: password})
    };
    setFetchError(null);
    const result = await apiRequest(API_URL, postOptions);
    if (result.errMsg) setFetchError(result.errMsg);
    if (!result.errMsg) setLoggedIn(true);
  }
  return(
    <>
      <form onSubmit={validateForm} className='container'>
        <h2>User Login</h2>
          <div className="form-group m-3">
            <label htmlFor='username' className='col'>User Name:</label>
            <input className="form-control" type='text' id='username' placeholder='User Name' value={username} maxLength={30} onChange={(e) => setUsername(e.target.value)}/>
            {userError.length > 0 &&
              userError.map((item, index) => <div key={index} className="form-text error">{item}</div>)
            }
          </div>
          <div className="form-group m-3">
            <label htmlFor='password' className='col'>Password:</label>
            <input className="form-control" type={passVis} id='password' placeholder='Password' value={password} maxLength={30} onChange={(e) => setPassword(e.target.value)}/>
            <div onClick={toggleVisibility} id='vis-toggle'>{passVis === 'password' ? <FaEyeSlash /> : <FaEye />}</div>
            {passError.length > 0 &&
              passError.map((item, index) => <div key={index} className="form-text error">{item}</div>)
            }
          </div>
        <button type='submit' className='m-3'>Login</button>
        {fetchError &&
          <div className='form-text error'>{fetchError}</div>
        }
      </form>
      {isLoggedIn &&
        <div className='p-3 text-center' id='logged-in'>
          <div className='mb-3 success'>You are now logged in!</div>
          <button onClick={()=>navigate('./users/grocery-list')}>Let's Make a Grocery List!</button>
        </div>
      }
    </>
    
  )
}

export default LoginForm;