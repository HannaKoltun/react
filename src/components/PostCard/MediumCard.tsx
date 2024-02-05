import './MediumCard.css';
import { useState, useEffect } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { dataCards } from "../data"


export default function MediumCard() {

    const originalDate = [dataCards[4]].map((item) => (item.date));
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
            <div className='mainMediumCardBlock'>
                <div className='blockWithImageM'>
                    <div>{imageUrl && <img src={imageUrl}
                        className='imageSizeM' />}
                    </div>
                </div>


                <div className='blockWitnTextM'>
                    {[dataCards[4]].map((item) => (
                        <div key={item.id}>
                            <div className='dateM'>{formattedDate}</div>
                            <div className='titleM'>{item.title}</div>
                        </div>
                    ))}
                </div>


                <div className='mainIconsBlockM'>

                    <div className='likeBlockM'>
                        
                    <AiOutlineLike className='likeIconM' onClick={() => setCount(count + 1)} />
                        <div className='counterM'>
                            {count}
                        </div>



                        <BiDislike className='likeIconM'></BiDislike>
                    </div>

                    <div className='saveBlockM'>
                        <FiBookmark className='bookMarkIconM'></FiBookmark>
                        <IoEllipsisHorizontal className='ellipsisIconM'></IoEllipsisHorizontal>
                    </div>

                </div>
            </div>
        </>
    )
}

