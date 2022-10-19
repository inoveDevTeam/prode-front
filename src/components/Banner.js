import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../assets/styles/banner.scss";

import fotoBanner1 from "../assets/img/wololo-iii-imagen.avif"
import fotoBanner2 from "../assets/img/locoser2.svg"
import fotoBanner3 from "../assets/img/inove2.svg"

function Banner() {
  return (
    <div className="cont-banner">
      <Swiper
        pagination={true}
        slidesPerView={1}
        centeredSlides={true}
        style={{maxWidth: '600px'}}
        autoplay={{
          pauseOnMouseEnter: true,
          delay: 2500,
          disableOnInteraction: false
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="cont-img">
            <img src={fotoBanner1} className="img-banner" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cont-img">
            <img src={fotoBanner2} className="img-banner" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cont-img">
            <img src={fotoBanner3} className="img-banner" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner