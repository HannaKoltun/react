import UserName from '../UserMalkin/UserName';
import './Header.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import Menu from '../MenuNotAuthorized/Menu';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <>
            <div className='header'>
                <div className='burgerBlock' onClick={toggleMenu} style={{ cursor: 'pointer' }}>
                    <RxHamburgerMenu className='iconBurger'></RxHamburgerMenu>
                </div>
                <UserName
                    initials="AM"
                    username="Artem Malkin"></UserName>
            </div>
            <Menu isMenuOpen={isMenuOpen}></Menu>
        </>
    );
}








