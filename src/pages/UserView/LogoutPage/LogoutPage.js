import './LogoutPage.scss';
import { useState, useEffect } from 'react';

function LogoutPage ({isLoggedIn, setLoggedIn}) {
  const API_URL = 'http://localhost:8080/logout';
  const [fetchError, setFetchError] = useState(null);
  const [loggedOut, setLoggedOut] = useState(false);

  useEffect(() => {
    logoutHandler();
  }, [])

  function logoutHandler() {
    console.log('logout attempt');
  }

  return (
    <>
      {loggedOut 
        ? <>
            <h2>Successfully logged out!</h2>
          </>
        : <>
            <h2>Oops Something went wrong!</h2>
          </>
      }
    </>
  )
}

export default LogoutPage;