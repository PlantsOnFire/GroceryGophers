import { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage/HomePage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import AccountPage from './pages/UserView/AccountPage/AccountPage';
import ContactPage from './pages/ContactPage/ContactPage';
import GroceryListPage from './pages/UserView/GroceryListPage/GroceryListPage';
import PantryPage from './pages/UserView/PantryPage/PantryPage';
import RecipePage from './pages/UserView/RecipePage/RecipePage';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import UserView from './pages/UserView/UserView';
import PublicView from './pages/PublicView/PublicView';
import GroceryPublicPage from './pages/PublicView/GroceryPublicPage/GroceryPublicPage';
import PantryPublicPage from './pages/PublicView/PantryPublicPage/PantryPublicPage';
import RecipesPublicPage from './pages/PublicView/RecipesPublicPage/RecipesPublicPage';

import {Routes, Route} from 'react-router-dom';
import PublicAccount from './pages/PublicView/PublicAccount/PublicAccount';
import LogoutPage from './pages/UserView/LogoutPage/LogoutPage';

import verifyLoggedIn from './api/verifyLoggedIn';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(()=> {
    verifyLoggedIn('test');
  })
  return (
    <>
      <Header isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* Protected Route Once Logged In */}
        <Route path='/user' element={<UserView/>}>
          <Route path='grocery-list' element={<GroceryListPage />} />
          <Route path='recipes' element={<RecipePage />} />
          <Route path='pantry' element={<PantryPage />} />
          <Route path='account' element={<AccountPage />} />
          <Route path='logout' element={<LogoutPage isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>}/>
        </Route>
        <Route path='/public' element={<PublicView/>}>
          <Route path='account'element={<PublicAccount isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>}/>
          <Route path='grocery-list' element={<GroceryPublicPage/>}/>
          <Route path='pantry' element={<PantryPublicPage/>}/>          
          <Route path='recipes' element={<RecipesPublicPage/>}/>
        </Route>
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer isLoggedIn={isLoggedIn}/>
    </>
  );
}

export default App;
