import {
  Civa,
  ColombiaLujo,
  CruzSur,
  MachuPicchu,
  Mota,
  Mundi,
  Tatito,
} from "../../../assets/empresas";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import "./Slider.css";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);
function Slider(props) {
  return (
    <>
      <div className="container">
        <div className="container--enterprise">
          <h2 className="title">Nuestros Principales Aliados</h2>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            autoplay={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            className="mySwiper swiper--enterprise mySwiperColorNone"
          >
            <SwiperSlide className="swiper-slide-opacity08">
              <img className="img__enterprise" src={Civa} alt="emp-1" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-opacity08">
              <img className="img__enterprise" src={ColombiaLujo} alt="emp-2" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-opacity08">
              <img className="img__enterprise" src={CruzSur} alt="emp-3" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-opacity08">
              <img className="img__enterprise" src={MachuPicchu} alt="emp-4" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-opacity08">
              <img className="img__enterprise" src={Mota} alt="emp-5" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-opacity08">
              <img className="img__enterprise" src={Mundi} alt="emp-6" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-opacity08">
              <img className="img__enterprise" src={Tatito} alt="emp-7" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Slider;
