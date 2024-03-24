import './AccountPage.scss';
import { useEffect, useState } from 'react';

function AccountPage () {
  const API_URL = 'http://localhost:8080/users';
  useEffect(()=> {
    getUserInfo();
  }, [])

  async function getUserInfo() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error('Did not receive expected data');
      let accountInfo = await response.json();
      console.log(accountInfo);
    } catch (err) {
      console.log(err);
    }
  }

  return(
    <main>
      Account Page
    </main>
  )
}

export default AccountPage;