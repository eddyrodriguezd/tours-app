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
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import "./Slider.css";

SwiperCore.use([EffectCoverflow, Pagination]);
function Slider(props) {
  return (
    <>
      <h2 className="title">Nuestros Principales Aliados</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Civa} alt="emp-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ColombiaLujo} alt="emp-2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CruzSur} alt="emp-3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MachuPicchu} alt="emp-4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Mota} alt="emp-5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Mundi} alt="emp-6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Tatito} alt="emp-7" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
