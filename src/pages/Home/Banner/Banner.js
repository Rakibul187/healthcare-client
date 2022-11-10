import React from 'react';
import img1 from '../../../assets/banner/banner1.webp';
import img2 from '../../../assets/banner/banner2.jpg';
import img3 from '../../../assets/banner/banner3.jpg';
import img4 from '../../../assets/banner/banner4.jpg';
// import img5 from '../../../assets/images/banner/5.jpg';
// import img6 from '../../../assets/images/banner/6.jpg';
import BannerItem from './BannerItem';

const bannerData = [
    {
        image: img1,
        prev: 4,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 1
    }
]

const Banner = () => {
    return (
        <div className="carousel w-full pb-10 mt-6 pt-5">
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }

        </div>
    );
};

export default Banner;
