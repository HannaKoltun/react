import UserName from '../userMalkin/UserName';
import './Header.css';
import { RxHamburgerMenu } from "react-icons/rx";


export default function Header() {
    return (
        <>
            <div className='header'>
                <div className='burgerBlock'>
                <RxHamburgerMenu className='iconBurger'></RxHamburgerMenu>
                </div>
                    <UserName
                    initials="AM"
                    username="Artem Malkin"></UserName>
            </div>
        </>
    );
}
