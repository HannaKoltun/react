import './BlockContentPage.css';
import { oneCardData } from '../../components/OnePostData';
import Footer from '../../components/Footer/Footer';
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import '../../components/NavigationPostCard/NavigationPostCard.css';
import { HiArrowLeft } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";
import OnePageDescription from '../../components/OnePageDescription/OnePageDescription';
import { useContext } from 'react';
import { myContext } from '../../providers/ThemeContext';
import { useParams } from 'react-router-dom';


export default function BlockContentPage() {

    const [color] = useContext(myContext)

    const { id } = useParams();
    console.log(id)

    return (
        <div className={`mainOnePageContainer${color}`}>
            <div className='mainContainer'>

                <div className='homeLinkBlock'>

                    <div className={`homeLink${color}`}>Home</div>
                    <div className='stick'>|</div>
                    <div className='postNumber'>




                        {[oneCardData].map((item) => (
                            <div key={item.id}>
                                <div className='post_num'>Post {item.postnum}</div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className={`OnePageContainerTitle${color}`}>
                    {[oneCardData].map((item) => (
                        <div key={item.id}>
                            <div className='title'>{item.title}</div>
                        </div>
                    ))}
                </div>


                <div className='onePageImageCotainer'>
                    {<img src={oneCardData.image} className='OnePageImage' />}
                </div>


                <OnePageDescription>
                    {[oneCardData].map((item) => (
                        <div key={item.id}>
                            <div className='descriptionStyle'>{item.description}</div>
                        </div>
                    ))}
                </OnePageDescription>


                <OnePageDescription>
                    {[oneCardData].map((item) => (
                        <div key={item.id}>
                            <div className='descriptionStyle'>{item.descriptiontwo}</div>
                        </div>
                    ))}
                </OnePageDescription>


                <OnePageDescription>
                    {[oneCardData].map((item) => (
                        <div key={item.id}>
                            <div className='descriptionStyle'>{item.descriptionthree}</div>
                        </div>
                    ))}
                </OnePageDescription>

                <div className='reactionsOnePageBlockContainer'>
                    <div className='reactionsOnePageBlock'>
                        <div className='containerMark'>
                            <div className={`likeButton${color}`}><AiOutlineLike className={`iconSize${color}`}></AiOutlineLike></div>
                            <div className={`dislikeButton${color}`}><BiDislike className={`iconSize${color}`}></BiDislike></div>
                        </div>

                        <div className={`addToFav${color}`}>
                            <FiBookmark className='iconBookMarkSize'></FiBookmark>
                            Add to favorites
                        </div>
                    </div>
                </div>
            </div>









            <div className={`mainOneBlockNavigation${color}`}>
                <div className='prevContainer'>
                    <div className="arrowLeft">
                        <HiArrowLeft className={`iconArrLeftPrev${color}`}></HiArrowLeft>
                    </div>

                    <div className='textPrevContainer'>
                        <div className={`titlePrev${color}`}>Prev</div>
                        <div className='descriptionPrev'>10 Things to Know About Salvador Dalí</div>
                    </div>

                </div>

                <div className='nextContainer'>
                    <div className='textNextContainer'>
                        <div className={`titlePrev${color}`}>Next</div>
                        <div className='descriptionPrev'>8 Beautiful Villas Belonging to Artists You Need to See</div>
                    </div>


                    <div className="arrowRight">
                        <HiArrowRight className={`iconArrRightNext${color}`}></HiArrowRight>
                    </div>
                </div>
            </div>



            <Footer></Footer>
        </div>
    )
}