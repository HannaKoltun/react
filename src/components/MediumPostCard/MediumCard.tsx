import './MediumCard.css';
import { useState, useEffect } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { dataCards } from "../data"
import { myContext } from "../../providers/ThemeContext"
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IPostCard } from '../../types/interface';
import { addToFav } from '../../slice/slice';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../slice/slice'
import { BiSolidBookmark } from "react-icons/bi";

export default function MediumCard({ id, date, title, component }: IPostCard) {


    const [color] = useContext(myContext)

    //date
    const formattedDate = (date: any) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const [year, month, day] = date.split('-');
        return `${months[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
    };



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

    const count = useSelector((state: any) => state.counter.value)

    //закладка
    const dispatch = useDispatch()
    function addFavorite() {
        dispatch(addToFav(component))
    }

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


            <div className={`mainMediumCardBlock${color}`}>


                <div className='blockWithImageM'>
                    <div>{imageUrl && <img src={imageUrl}
                        className='imageSizeM' />}
                    </div>
                </div>

                <div className='blockWithTextM'>
                    <div className='dateM'>{formattedDate(date)}</div>
                    <div key={id}>
                        <Link className={`titleM${color}`} to={`/${id}`}>{title}</Link>
                    </div>
                </div>


                <div className='mainIconsBlockM'>
                    <div className='likeBlockM'>


                        <AiOutlineLike className={`likeIconM${color}`} onClick={() => dispatch(increment())} />
                        <div className={`counterM${color}`}>
                            {count}
                        </div>

                        <BiDislike className={`likeIconM${color}`}></BiDislike>
                    </div>

                    <div className='saveBlockM'>
                        <div
                            className={`bookMarkIcon${color}`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={addFavorite}
                            style={{ cursor: 'pointer' }}>{icon}</div>
                        <IoEllipsisHorizontal className={`ellipsisIconM${color}`}></IoEllipsisHorizontal>
                    </div>
                </div>


            </div >
        </>
    )
}

