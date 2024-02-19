import Tabs from '../../components/Tabs/Tabs';
import './MainPostCardBlock.css';
import LargeCard from '../../components/LargePostCard/LargeCard';
import SmallCard from '../../components/SmallPostCard/SmallCard';
import MediumCard from '../../components/MediumPostCard/MediumCard';
import { dataCards } from '../../components/data';
import NavigationPostCard from '../../components/NavigationPostCard/NavigationPostCard';
import Footer from '../../components/Footer/Footer';


export default function MainPostCardBlock() {


    return (
        <>
            <div className='mainContainer'>
                <div className='mainPostCardBlock'>
                    <div className='textBlock'>Block</div>
                    <Tabs styleTab="all" isDisabled={false}>All</Tabs>
                    <Tabs styleTab="favorite" isDisabled={false}>My favorites</Tabs>
                    <Tabs styleTab="popular" isDisabled={false}>Popular</Tabs>
                    <div className='greyLine'></div>

                    <div className='container'>
                        <div className='leftContainer'>
                            <div className='largeContainer'>
                                <LargeCard></LargeCard>
                            </div>

                            <div className='mediumContainer'>
                                <div className='topBlock'>
                                    {dataCards.slice(0, dataCards.length - 8).map(item => (
                                        <MediumCard key={item.id} />
                                    ))}
                                </div>

                                <div className='topBlock'>
                                    {dataCards.slice(0, dataCards.length - 8).map(item => (
                                        <MediumCard key={item.id} />
                                    ))}
                                </div>

                            </div>
                        </div>
                        <div className='smallContainer'>
                            {dataCards.slice(0, dataCards.length - 4).map(item => (
                                <SmallCard key={item.id} />
                            ))}
                        </div>
                    </div>
                </div>
                <NavigationPostCard></NavigationPostCard>
                <Footer></Footer>
            </div>
        </>
    )
}




