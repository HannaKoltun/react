import './SmallCard.css';
import { useState, useEffect } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { dataCards } from "../data"
import { myContext } from "../../providers/ThemeContext"
import { useContext } from 'react';
import { IPostCard } from '../../types/interface';
import { Link } from 'react-router-dom';


export default function SmallCard({ id, image, text, date, lesson_num, title, description, author }: IPostCard) {
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


    let [count, setCount] = useState(0)
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
                        <AiOutlineLike className={`likeIconS${color}`} onClick={() => setCount(count + 1)} />
                        <div className={`counterS${color}`}>
                            {count}
                        </div>
                        <BiDislike className={`likeIconS${color}`}></BiDislike>
                    </div>

                    <div className='saveBlockS'>
                        <FiBookmark className={`bookMarkIconS${color}`}></FiBookmark>
                        <IoEllipsisHorizontal className={`ellipsisIconS${color}`}></IoEllipsisHorizontal>
                    </div>

                </div>
            </div>
        </>
    )
}

