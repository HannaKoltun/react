import './App.css';
import Button from './components/Button//Button';
import UserName from './components/UserMalkin/UserName';
import State from './components/State/State';
import Form from './components/Form/Form';
import Inputs from './components/Inputs/Inputs';
import TextArea from './components/Textarea/TextArea';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Menu from './components/MenuNotAuthorized/Menu';
import Tabs from './components/Tabs/Tabs';
import Primary from './components/PrimarySecondary/Primary';
import LargeCard from './components/LargePostCard/LargeCard';
import MediumCard from './components/MediumPostCard/MediumCard';
import SmallCard from './components/SmallPostCard/SmallCard';
import SearchCard from './components/SearchCard/SearchCard';
import NavigationPostCard from './components/NavigationPostCard/NavigationPostCard';
import PageMainPostCard from '../src/pages/PagePostCards/MainPostCardBlock';
import PageTitle from './pages/PageTitle/BlockTitle';
import PageSignUp from './pages/PageSignUp/BlockSignUp';
import PageRegConfirm from './pages/PageRegConfirm/BlockRegConfirm';
import PageSignIn from './pages/PageSignIn/BlockSignIn';
import PageSuccess from './pages/PageSuccess/BlockSuccess';
import PageSearchResults from './pages/PageSearchResults/PageSearchResults';
import BlockContentPage from './pages/PageContentBlock/BlockContentPage';
import PageRecetPassword from  './pages/PageResetPassword/PageResetPassword';
import ThemeContext from './providers/ThemeContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>


      <ThemeContext>
        <BrowserRouter>
          <Header></Header>
        {/* <PageRecetPassword></PageRecetPassword> */}
          <Routes>
            <Route path='/' element={<PageMainPostCard />}></Route>
            <Route path='/:id' element={<BlockContentPage />}></Route>
            <Route path='/search' element={<PageSearchResults />}></Route>
            <Route path='/regconfirm' element={<PageRegConfirm />}></Route>
            <Route path='/signup' element={<PageSignUp />}></Route>
            <Route path='/signin' element={<PageSignIn />}></Route>
            <Route path='/title' element={<PageTitle />}></Route>
            <Route path='/success' element={<PageSuccess />}></Route>
          </Routes>
        </BrowserRouter>



      </ThemeContext>
    </>
  );
}


