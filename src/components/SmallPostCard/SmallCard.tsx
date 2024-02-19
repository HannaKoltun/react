import './SmallCard.css';
import { useState, useEffect } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { dataCards } from "../data"


export default function SmallCard() {

    const originalDate = [dataCards[7]].map((item) => (item.date));
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


    let [count, setCount] = useState(0)
    return (
        <>
            <div className='mainSmallCardBlock'>
                <div className='mainTopBlockS'>
                    <div className='blockWitnTextS'>

                        {[dataCards[7]].map((item) => (
                            <div key={item.id}>
                                <div className='dateS'>{formattedDate}</div>
                                <div className='titleS'>{item.title}</div>
                            </div>
                        ))}

                    </div>

                    <div className=' blockWithImageS'>{imageUrl && <img src={imageUrl}
                        className='imageSizeS' />}
                    </div>
                </div>


                <div className='mainIconsBlockS'>

                    <div className='likeBlockS'>
                    <AiOutlineLike className='likeIconS' onClick={() => setCount(count + 1)} />
                        <div className='counterS'>
                            {count}
                        </div>
                        <BiDislike className='likeIconS'></BiDislike>
                    </div>

                    <div className='saveBlockS'>
                        <FiBookmark className='bookMarkIconS'></FiBookmark>
                        <IoEllipsisHorizontal className='ellipsisIconS'></IoEllipsisHorizontal>
                    </div>

                </div>
            </div>
        </>
    )
}

