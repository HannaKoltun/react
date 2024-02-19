import './BlockRegConfirm.css';
import Footer from '../../components/Footer/Footer';

export default function BlockRegConfirm() {
    return (
        <>
            <div className='mainContainerLight mainContainerDark'>
                <div className='mainBlockTitle'>
                    <div className='backHomeLight backHomeDark'>Back to home</div>
                    <div className='textBlockLight textBlockDark'>Registration Confirm</div>
                    <div className='container'>
                        <div className='informationContainer'>

                            <div className='regDescription'>
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