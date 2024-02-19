import Footer from '../../components/Footer/Footer';
import './BlockSuccess.css';
export default function BlockSuccsess() {


    return (
        <>
            <div className='mainContainerLight mainContainerDark'>
                <div className='mainBlockTitle'>
                    <div className='backHomeLight backHomeDark'>Back to home</div>
                    <div className='textBlockLight textBlockDark'>Success</div>
                    <div className='container'>
                        <div className='informationContainer'>

                            <div className='regDescription'>
                            Email confirmed.
                                <br />Your registration is now completed
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