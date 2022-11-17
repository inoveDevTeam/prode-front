import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
//import fotoBanner1 from "../assets/img/wololo-iii-imagen.avif"
//import fotoBanner2 from "../assets/img/locoser2.svg"
import fotoBanner1 from "../assets/img/qatar.jpg"
//import fotoBanner2 from "../assets/img/franja.jpg"
import fotoBanner3 from "../assets/img/inove2.svg"
import "../assets/styles/banner.scss";
import "swiper/css/pagination";
import "swiper/css";

function Banner() {
  return (
    <div className="cont-banner">
      <a href="https://www.inove.com.ar">
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
          {/* <SwiperSlide>
            <div className="cont-img">
              <img src={fotoBanner2} className="img-banner" />
            </div>
          </SwiperSlide> */}
          <SwiperSlide>
            <div className="cont-img">
              <img src={fotoBanner3} className="img-banner" />
            </div>
          </SwiperSlide>
        </Swiper>
      </a>
    </div>
  )
}

export default Banner