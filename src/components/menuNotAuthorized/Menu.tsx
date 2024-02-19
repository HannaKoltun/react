import './Menu.css';
import { LuSun } from "react-icons/lu";
import { FiMoon } from "react-icons/fi";


export default function Header() {
    return (
        <>
            <div className='mainMenuBlock'>
                <div className='home'>Home</div>
                <div className='bottomMainBlock'>
                    <div className='blockForDW'>
                        <div className='light'>
                            <LuSun className='iconSun'></LuSun>
                        </div>
                        <div className='dark'>
                            <FiMoon className='iconMoon'></FiMoon>
                        </div>
                    </div>
                    <div className='signIn'>Sign in</div>
                </div>
            </div>
        </>
    );
}
