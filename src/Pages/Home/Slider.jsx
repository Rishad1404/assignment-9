import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../../src/App.css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
const Slider = () => {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                
                <SwiperSlide><img src="https://i.imgur.com/qhff70B.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.imgur.com/RACSnmP.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.imgur.com/dEysptj.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.imgur.com/DxgNhkF.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.imgur.com/8kB4KqE.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.imgur.com/ZrmErV1.jpeg" alt="" /></SwiperSlide>

            </Swiper>
        </>
    );
};

export default Slider;