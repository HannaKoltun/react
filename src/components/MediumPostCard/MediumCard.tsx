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


export default function MediumCard({ id, image, text, date, lesson_num, title, description, author }: IPostCard) {


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

                    <AiOutlineLike className={`likeIconM${color}`} onClick={() => setCount(count + 1)} />
                    <div className={`counterM${color}`}>
                        {count}
                    </div>

                    <BiDislike className={`likeIconM${color}`}></BiDislike>
                </div>

                <div className='saveBlockM'>
                    <FiBookmark className={`bookMarkIconM${color}`}></FiBookmark>
                    <IoEllipsisHorizontal className={`ellipsisIconM${color}`}></IoEllipsisHorizontal>
                </div>
            </div>


        </div >
    </>
)
}

