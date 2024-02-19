import './LargeCard.css';
import { useState, useEffect } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { dataCards } from "../data"


export default function LargeCard() {

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

    //counter
    let [count, setCount] = useState(0)
    return (
        <>
            <div className='mainLargeCardBlock'>
                <div className='mainTopBlock'>
                    <div className='blockWitnText'>
                        {[dataCards[0]].map((item) => (
                            <div key={item.id}>
                                <div className='date'>{formattedDate}</div>
                                <div className='title'>{item.title}</div>
                                <div className='description'>{item.description}</div>
                            </div>
                        ))}
                    </div>

                    <div className=' blockWithImage'>{imageUrl && <img src={imageUrl}
                        className='imageSize' />}
                    </div>
                </div>


                <div className='mainIconsBlock'>

                    <div className='likeBlock'>
                        <AiOutlineLike className='likeIcon' onClick={() => setCount(count + 1)} />
                        <div className='counter'>
                            {count}
                        </div>

                        <BiDislike className='likeIcon'></BiDislike>
                    </div>

                    <div className='saveBlock'>
                        <FiBookmark className='bookMarkIcon'></FiBookmark>
                        <IoEllipsisHorizontal className='ellipsisIcon'></IoEllipsisHorizontal>
                    </div>

                </div>
            </div>
        </>
    )
}

