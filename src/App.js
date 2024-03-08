import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage/HomePage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import AccountPage from './pages/AccountPage/AccountPage';
import ContactPage from './pages/ContactPage/ContactPage';
import GroceryListPage from './pages/GroceryListPage/GroceryListPage';
import PantryPage from './pages/PantryPage/PantryPage';
import RecipePage from './pages/RecipePage/RecipePage';
import PageNotFound from './pages/PageNotFound/PageNotFound';

import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/grocery-list' element={<GroceryListPage />} />
        <Route path='/recipes' element={<RecipePage />} />
        <Route path='/pantry' element={<PantryPage />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
