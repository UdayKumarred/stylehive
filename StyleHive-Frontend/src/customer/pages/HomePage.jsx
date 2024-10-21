import React from 'react'
import MainCarousel from '../components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens } from '../../Data/mens'


const HomePage = () => {
    return(
        <div>
            <MainCarousel/>
            <div className='space-y-10 py-20 flex flex-col justify-center px-5 '>

<HomeSectionCarosel data={mens} sectionName={"Mens"}/>
<HomeSectionCarosel data={mens} sectionName={"Shoes"}/>
<HomeSectionCarosel data={mens} sectionName={"Shirts"}/>
<HomeSectionCarosel data={mens} sectionName={"Womens"}/>
<HomeSectionCarosel data={mens} sectionName={"Womens dress"}/>

            </div>
        </div>
    )
}

export default HomePage