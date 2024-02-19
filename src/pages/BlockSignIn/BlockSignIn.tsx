import './BlockSignIn.css';
import Inputs from '../../components/inputs/inputs';
import Footer from '../../components/Footer/Footer';

export default function BlockSignIn() {


    return (
        <>
            <div className='mainContainerLight mainContainerDark'>
                <div className='mainBlockTitle'>
                    <div className='backHomeLight backHomeDark'>Back to home</div>
                    <div className='textBlockLight textBlockDark'>Sign In</div>
                    <div className='container'>
                        <div className='inputsContainer'>
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
                            <a href="" className='forgotPass'>Forgot password?</a>
                            <button className='signUpButton'>Sign In</button>

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