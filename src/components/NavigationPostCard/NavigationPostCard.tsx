import './NavigationPostCard.css';
import { HiArrowLeft } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";

export default function NavigationPostCard() {
    return (
        <>
            <div className='mainBlocknavigation'>
                <div className="arrowLeft">
                    <HiArrowLeft className='iconArrLeft'></HiArrowLeft>
                    Prev
                </div>
                <div className="NumberSequence">1 2 3 ... 6</div>
                <div className="arrowRight">
                    Next
                    <HiArrowRight className='iconArrRight'></HiArrowRight>
                </div>
            </div>
        </>
    )
}