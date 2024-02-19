import '../../pages/BlockContentPage/BlockContentPage.css';
import { oneCardData } from '../../components/OnePostData';
import { dataCards } from '../../components/data';
import NavigationPostCard from '../../components/NavigationPostCard/NavigationPostCard';
import Footer from '../../components/Footer/Footer';
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import '../../components/NavigationPostCard/NavigationPostCard.css';
import { HiArrowLeft } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";
import { IOnePAgeDescription } from '../../types/interface';


export default function OnePageDescription({children}:IOnePAgeDescription) {



    return (
        <>
            <div className='onePageDescriptionContainer'>
                <div className='onePageDescription'>  
                </div>
            </div>
            <div className='onePageDescriptionContainer'>
                <div className='onePageDescription'>
                            <div className='description'>{children}</div>
                </div>
            </div>
        </>
    )
}


