import './BlockRegConfirm.css';
import Footer from '../../components/Footer/Footer';
import { myContext } from "../../providers/ThemeContext"
import { useContext } from 'react';

export default function BlockRegConfirm() {
    const [color] = useContext(myContext)
    return (
        <>
            <div className={`mainContainerConfirm${color}`}>
                <div className={`mainBlockTitleConfirm${color}`}>
                    <div className={`backHomeConfirm${color}`}>Back to home</div>
                    <div className={`textBlockConfirm${color}`}>Registration Confirm</div>
                    <div className={`containerConfirm${color}`}>
                        <div className={`informationContainerConfirm${color}`}>

                            <div className={`regDescriptionConfirm${color}`}>
                                Please activate your account with the activation
                                link in the email <strong>example@gmail.com.</strong>
                                <br />Please, check your email
                            </div>
                            <button className='signUpButton'>Go to home</button>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}