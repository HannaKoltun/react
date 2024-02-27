import Tabs from '../../components/Tabs/Tabs';
import './MainPostCardBlock.css';
import LargeCard from '../../components/LargePostCard/LargeCard';
import SmallCard from '../../components/SmallPostCard/SmallCard';
import MediumCard from '../../components/MediumPostCard/MediumCard';
import { dataCards } from '../../components/data';
import NavigationPostCard from '../../components/NavigationPostCard/NavigationPostCard';
import Footer from '../../components/Footer/Footer';
import { myContext } from "../../providers/ThemeContext"
import { useContext } from 'react';


export default function MainPostCardBlock() {


    const [color] = useContext(myContext)

    return (
        <>

            <div className={`mainContainer${color}`}>
                <div className='mainPostCardBlock'>
                    <div className={`textBlock${color}`}>Blog</div>
                    <Tabs styleTab={`all${color}`} isDisabled={false}>All</Tabs>
                    <Tabs styleTab={`favorite${color}`} isDisabled={false}>My favorites</Tabs>
                    <Tabs styleTab={`popular${color}`} isDisabled={false}>Popular</Tabs>
                    <div className='greyLine'></div>

                    <div className='containerL'>
                        <div className='leftContainer'>
                            <div className='largeContainer'>
                                <LargeCard></LargeCard>
                            </div>


                            <div className='mediumContainer'>
                                <div className='leftMContainer'>
                                    {dataCards.slice(1, 3).map((postItem) => (
                                        <MediumCard
                                            id={postItem.id}
                                            title={postItem.title}
                                            date={postItem.date} />
                                    ))}
                                </div>

                                <div className='leftMContainer'>
                                    {dataCards.slice(3, 5).map((postItem) => (
                                        <MediumCard
                                            id={postItem.id}
                                            title={postItem.title}
                                            date={postItem.date} />
                                    ))}
                                </div>
                            </div>
                        </div>




                        <div className='smallContainer'>
                            {dataCards.slice(5, 10).map((postItem) => (
                                <SmallCard
                                    id={postItem.id}
                                    title={postItem.title}
                                    date={postItem.date} />
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




