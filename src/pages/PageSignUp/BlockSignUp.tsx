import './BlockSignUp.css';
import Inputs from '../../components/Inputs/Inputs';
import Footer from '../../components/Footer/Footer';
import { myContext } from "../../providers/ThemeContext"
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function BlockSignUp() {

    const [color] = useContext(myContext)

    return (
        <>
            <div className={`mainContainerUp${color}`}>
                <div className={`mainBlockTitleUp${color}`}>
                    <div className={`backHomeUp${color}`}> Back to home</div>
                    <div className={`textBlockUp${color}`}>Sign Up</div>
                    <div className={`containerUp${color}`}>
                        <div className={`inputsContainerUp${color}`}>
                            <Inputs
                                id="1"
                                legend="Name"
                                type="text"
                                typeInput={`default${color} focus${color} active${color}`}
                                isDisabled={false}
                                placeholder="Your name"
                            ></Inputs>
                            <Inputs
                                id="2"
                                legend="Email"
                                type="email"
                                typeInput={`default${color} focus${color} active${color}`}
                                isDisabled={false}
                                placeholder="Your email"
                            ></Inputs>
                            <Inputs
                                id="3"
                                legend="Password"
                                type="password"
                                typeInput={`default${color} focus${color} active${color}`}
                                isDisabled={false}
                                placeholder="Your password"
                            ></Inputs>
                            <Inputs
                                id="4"
                                legend="Confirm Password"
                                type="password"
                                typeInput={`default${color} focus${color} active${color}`}
                                isDisabled={false}
                                placeholder="Confirm password"
                            ></Inputs>
                            <Link to={`/confirmation`}>
                                <button className={`signUpButton${color}`}>Sign Up</button>
                            </Link>
                            <div className={`titleAvailabilityAcc${color}`}>Already have an account?
                                <Link className='signLink' to="/signin">Sign In</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}