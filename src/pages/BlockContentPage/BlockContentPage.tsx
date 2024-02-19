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


export default function BlockContentPage() {

    return (
        <div className='mainOnePageContainer'>
            <div className='mainContainer'>

                <div className='homeLinkBlock'>
                    <div className='homeLink'>Home</div>
                    <div className='stick'>|</div>
                    <div className='postNumber'>

                        {[oneCardData].map((item) => (
                            <div key={item.id}>
                                <div className='post_num'>Post {item.postnum}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='OnePageContainerTitle'>
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
                            <div className='description'>{item.description}</div>
                        </div>
                    ))}
                </OnePageDescription>


                <OnePageDescription>
                    {[oneCardData].map((item) => (
                        <div key={item.id}>
                            <div className='description'>{item.descriptiontwo}</div>
                        </div>
                    ))}
                </OnePageDescription>


                <OnePageDescription>
                    {[oneCardData].map((item) => (
                        <div key={item.id}>
                            <div className='description'>{item.descriptionthree}</div>
                        </div>
                    ))}
                </OnePageDescription>



                <div className='reactionsOnePageBlockContainer'>
                    <div className='reactionsOnePageBlock'>
                        <div className='containerMark'>
                            <div className='likeButton'><AiOutlineLike className='iconSize'></AiOutlineLike></div>
                            <div className='dislikeButton'><BiDislike className='iconSize'></BiDislike></div>
                        </div>

                        <div className='addToFav'>
                            <FiBookmark className='iconBookMarkSize'></FiBookmark>
                            Add to favorites
                        </div>
                    </div>
                </div>
            </div>





            <div className='mainBlocknavigation'>

                <div className='prevContainer'>


                    <div className="arrowLeft">
                        <HiArrowLeft className='iconArrLeftPrev'></HiArrowLeft>
                    </div>

                    <div className='textPrevContainer'>
                        <div className='titlePrev'>Prev</div>
                        <div className='descriptionPrev'>10 Things to Know About Salvador Dalí</div>
                    </div>

                </div>

                <div className='nextContainer'>
                    <div className='textNextContainer'>
                        <div className='titlePrev'>Next</div>
                        <div className='descriptionPrev'>8 Beautiful Villas Belonging to Artists You Need to See</div>
                    </div>


                    <div className="arrowRight">
                        <HiArrowRight className='iconArrRightNext'></HiArrowRight>
                    </div>


                </div>

            </div>



            <Footer></Footer>
        </div>
    )
}