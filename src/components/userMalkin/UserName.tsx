import './UserName.css';
import { FiSearch } from "react-icons/fi";
interface IUser {
    username?: string
    initials?: string
}

export default function UserName({ username, initials, }: IUser) {
    return (
        <>


            <div className='mainBlue'>
            <div className='searchBlock'>
                <FiSearch className='iconSearch'></FiSearch></div>

                
                <div className='square'>{initials}</div>
                <div className='secondBlue'>{username}</div>
            </div>
        </>
    );
}
