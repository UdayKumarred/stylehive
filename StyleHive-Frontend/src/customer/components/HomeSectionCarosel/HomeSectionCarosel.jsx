import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';



const HomeSectionCarosel = ({data,sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);
    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    const items = data.slice(0,5).map((item) => <HomeSectionCard product={item}/>)
    return (
        <div className=''>
            <h2 className="text-2xl font-extrabold text-gray-900 py-5"> {sectionName}</h2>
            <div className='relative p-5 border'>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    infinite
                    responsive={responsive}
                    disableDotsControls
                    onSlideChange={syncActiveIndex}
                    activeIndex={activeIndex}
                />
            {/* <Button variant='contained' className='z-50' onclick={slideNext} sx={{ position: 'absolute', top: '8rem', right: '0rem', transform: 'translateX(50%) rotate(90deg)', bgcolor: "white" }}
                    aria-label='next' >
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>
                <Button variant='contained' className='z-50' onclick={slidePrev} sx={{ position: 'absolute', top: '8rem', left: '0rem', transform: 'translateX(-50%) rotate(-90deg)', bgcolor: "white" }}
                    aria-label='next' >
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button> */}
            </div>
        </div>
    )
}

export default HomeSectionCarosel