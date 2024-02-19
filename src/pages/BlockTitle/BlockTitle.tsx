import './BlockTitle.css';
import Footer from '../../components/Footer/Footer';


export default function BlockTitle() {
    return (
        <>
            <div className='mainContainerLight mainContainerDark'>
                <div className='mainBlockTitle'>
                    <div className='backHomeLight backHomeDark'>Back to home</div>
                    <div className='textBlockLight textBlockDark'>Title</div>
                    <div className='container'>
                        <div className='templateBodyLight templateBodyDark'>Template body</div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}




