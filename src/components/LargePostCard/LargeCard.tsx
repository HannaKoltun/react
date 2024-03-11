import './LargeCard.css';
import { useState, useEffect } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { dataCards } from "../data"
import { myContext } from "../../providers/ThemeContext"
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../slice/slice'
import { IPostCard } from '../../types/interface';
import { addToFav } from '../../slice/slice';
import { BiSolidBookmark } from "react-icons/bi";

export default function LargeCard({ component }: { component: any }) {
    const [color] = useContext(myContext)


    const originalDate = [dataCards[0]].map((item) => (item.date));
    let DateString = String(originalDate)
    const dateObj = new Date(DateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const formattedDate = `${months[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;

    //image
    const [imageUrl, setImageUrl] = useState('');
    useEffect(() => {

        async function fetchImage() {
            let response = await fetch('https://loremflickr.com/320/240/space');
            let blob = await response.blob();
            let url = URL.createObjectURL(blob);
            setImageUrl(url);
        }
        fetchImage();
    }, []);


    const dispatch = useDispatch()
    function addFavorite() {
        dispatch(addToFav(component))
    }

    //counter
    const count = useSelector((state: any) => state.counter.value)


    //hover Для закладки
    const [isHovered, setIsHovered] = useState(false);

    const icon = isHovered ? <BiSolidBookmark className={`bookMarkIconFav${color}`} /> : <FiBookmark className={`bookMarkIcon${color}`} />;

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            <div className={`mainLargeCardBlock${color}`} >
                <Link className='mainTopBlock' to={`/${dataCards[0].id}`}>


                    <div className='blockWitnText'>
                        {[dataCards[0]].map((item) => (
                            <div key={item.id}>
                                <div className='date'>{formattedDate}</div>
                                <div className={`title${color}`} >{item.title}</div>
                                <div className='description'>{item.description}</div>
                            </div>
                        ))}
                    </div>

                    <div className=' blockWithImage'>{imageUrl && <img src={imageUrl}
                        className='imageSize' />}
                    </div>
                </Link>


                <div className='mainIconsBlock'>

                    <div className='likeBlock'>
                        <AiOutlineLike className={`likeIcon${color}`} onClick={() => dispatch(increment())} />
                        <div className={`counter${color}`}>{count}</div>

                        <BiDislike className={`likeIcon${color}`}></BiDislike>
                    </div>



                    <div className='saveBlock'>
                        <div
                            className={`bookMarkIcon${color}`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={addFavorite}
                            style={{ cursor: 'pointer' }}>{icon}</div>
                        <IoEllipsisHorizontal className={`ellipsisIcon${color}`}></IoEllipsisHorizontal>
                    </div>

                </div>
            </div>
        </>
    )
}

