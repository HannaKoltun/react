import './BlockSignUp.css';
import Inputs from '../../components/inputs/inputs';
import Footer from '../../components/Footer/Footer';

export default function BlockSignUp() {


    return (
        <>
            <div className='mainContainerLightUp mainContainerDarkUp'>
                <div className='mainBlockTitleUp'>
                    <div className='backHomeLightUp backHomeDarkUp'>Back to home</div>
                    <div className='textBlockLightUp textBlockDarkUp'>Sign Up</div>
                    <div className='containerUp'>
                        <div className='inputsContainerUp'>
                            <Inputs
                                id="1"
                                legend="Name"
                                type="text"
                                typeInput="default focus active"
                                isDisabled={false}
                                placeholder="Your name"
                            ></Inputs>
                            <Inputs
                                id="2"
                                legend="Email"
                                type="email"
                                typeInput="default focus active"
                                isDisabled={false}
                                placeholder="Your email"
                            ></Inputs>
                            <Inputs
                                id="3"
                                legend="Password"
                                type="password"
                                typeInput="default focus active"
                                isDisabled={false}
                                placeholder="Your password"
                            ></Inputs>
                            <Inputs
                                id="4"
                                legend="Confirm Password"
                                type="password"
                                typeInput="default focus active"
                                isDisabled={false}
                                placeholder="Confirm password"
                            ></Inputs>

                            <button className='signUpButton'>Sign Up</button>

                            <div className='titleAvailabilityAcc'>Already have an account?
                                <a href="" className='signLink'>Sign In</a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}