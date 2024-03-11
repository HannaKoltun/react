import './SmallCard.css';
import { useState, useEffect } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { myContext } from "../../providers/ThemeContext"
import { useContext } from 'react';
import { IPostCard } from '../../types/interface';
import { Link } from 'react-router-dom';
import { addToFav } from '../../slice/slice';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../slice/slice'
import { BiSolidBookmark } from "react-icons/bi";


export default function SmallCard({ id, date, title, component }: IPostCard) {
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

    //закладка
    const dispatch = useDispatch()
    function addFavorite() {
        dispatch(addToFav(component))
    }

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
            <div className={`mainSmallCardBlock${color}`}>
                <div className='mainTopBlockS'>


                    <div className='blockWitnTextS'>
                        <div key={id}>
                            <div className='dateS'>{formattedDate(date)}</div>
                            <Link className={`titleS${color}`} to={`/${id}`}>{title}</Link>
                        </div>
                    </div>


                    <div className=' blockWithImageS'>{imageUrl && <img src={imageUrl}
                        className='imageSizeS' />}
                    </div>
                </div>




                <div className='mainIconsBlockS'>

                    <div className='likeBlockS'>
                        <AiOutlineLike className={`likeIconS${color}`} onClick={() => dispatch(increment())} />
                        <div className={`counterS${color}`}>
                            {count}
                        </div>

                        <BiDislike className={`likeIconS${color}`}></BiDislike>
                    </div>

                    <div className='saveBlockS'>
                        <div
                            className={`bookMarkIcon${color}`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={addFavorite}
                            style={{ cursor: 'pointer' }}>{icon}</div>
                        <IoEllipsisHorizontal className={`ellipsisIconS${color}`}></IoEllipsisHorizontal>
                    </div>

                </div>
            </div>
        </>
    )
}

