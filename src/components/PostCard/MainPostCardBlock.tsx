import Tabs from '../Tabs/Tabs';
import './MainPostCardBlock.css';
import LargeCard from '..//PostCard/LargeCard';
import SmallCard from '..//PostCard/SmallCard';
import { dataCards } from "../data"
import MediumCard from './MediumCard';

export default function MainPostCardBlock() {


    return (
        <>
        <div className='MainContainer'>
            <div className='mainPostCardBlock'>
                <div className='TextBlock'>Block</div>
                <Tabs styleTab="all" isDisabled={false}>All</Tabs>
                <Tabs styleTab="favorite" isDisabled={false}>My favorites</Tabs>
                <Tabs styleTab="popular" isDisabled={false}>Popular</Tabs>
                <div className='greyLine'></div>

                <div className='container'>
                    <div className='LeftContainer'>
                        <div className='LargeContainer'>
                            <LargeCard></LargeCard>
                        </div>
                        <div className='MediumContainer'>
                            <div className='TopBlock'>
                                {dataCards.slice(0, dataCards.length - 8).map(item => (
                                    <MediumCard key={item.id} />
                                ))}
                            </div>
                            <div className='TopBlock'>
                                {dataCards.slice(0, dataCards.length - 8).map(item => (
                                    <MediumCard key={item.id} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='SmallContainer'>
                        {dataCards.slice(0, dataCards.length - 4).map(item => (
                            <SmallCard key={item.id} />
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}




