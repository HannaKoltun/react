import './App.css';
import Button from './components/button/button';
import UserName from './components/userMalkin/UserName';
import State from './components/state/state';
import Form from './components/form/Form';
import Inputs from './components/inputs/inputs';
import TextArea from './components/Textarea/TextArea';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import Menu from './components/menuNotAuthorized/Menu';
import Tabs from './components/Tabs/Tabs';
import Primary from './components/PrimarySecondary/Primary';
import LargeCard from './components/LargePostCard/LargeCard';
import MediumCard from './components/MediumPostCard/MediumCard';
import SmallCard from './components/SmallPostCard/SmallCard';
import MainPostCardBlock from '../src/pages/BlockPostCardMain/MainPostCardBlock';
import BlockTitle from './pages/BlockTitle/BlockTitle';
import BlockSignUp from './pages/BlockSignUp/BlockSignUp';
import BlockRegConfirm from './pages/BlockRegConfirm/BlockRegConfirm';
import BlockSignIn from './pages/BlockSignIn/BlockSignIn';
import BlockSuccess from './pages/BlockSuccess/BlockSuccess';
import NavigationPostCard from './components/NavigationPostCard/NavigationPostCard';
import BlockContentPage from './pages/BlockContentPage/BlockContentPage';

export default function App() {

  return (
    <>
      {/* <TextArea rows={5} cols={33}></TextArea> */}
      <Header></Header>

      {/* <Menu></Menu> */}

      {/* <Primary styleButton="primary">Primary</Primary>
      <Primary styleButton="secondary">Secondary</Primary>
      <Primary styleButton="secondaryTwo">Secondary 2</Primary>  */}

      {/* <BlockTitle></BlockTitle>
      <BlockSignUp></BlockSignUp>
      <BlockRegConfirm></BlockRegConfirm>
      <BlockSignIn></BlockSignIn>
      <BlockSuccess></BlockSuccess> */}
      {/* <MainPostCardBlock></MainPostCardBlock> */}
      {/* <BlockContentPage></BlockContentPage> */}
    </>
  );
}


