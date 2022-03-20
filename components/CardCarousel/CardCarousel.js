import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import CardGallery from '../CardGallery/CardGallery';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const CardCarousel = ({ carouselInfo }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      {
        carouselInfo.map((info, index) => (
          <SwiperSlide key={index}>
            <CardGallery {...info} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};

CardCarousel.propTypes = {
  carouselInfo: PropTypes.object.isRequired,
};

export default CardCarousel;
