import UserName from '../UserMalkin/UserName';
import './Header.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from 'react';
import Menu from '../MenuNotAuthorized/Menu';
import { RxCross1 } from "react-icons/rx";

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuIcon, setMenuIcon] = useState(<RxHamburgerMenu className='iconBurger'></RxHamburgerMenu>);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setMenuIcon(isMenuOpen ? <RxHamburgerMenu className='iconBurger' /> : <RxCross1 className='iconBurger' />);
    };

    return (
        <>
            <div className='header'>
                <div className='burgerBlock' onClick={toggleMenu} style={{ cursor: 'pointer' }}>{menuIcon}</div>
                <UserName
                    initials="AK"
                    username="Anna Koltun"></UserName>
            </div>
            <Menu isMenuOpen={isMenuOpen}></Menu>
        </>
    );
}








