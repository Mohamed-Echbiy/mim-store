import { Swiper, SwiperSlide } from "swiper/react";
import HeroSection from "../HeroSection/HeroSection";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper";

function Slider() {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
        }}
        loop={true}
      >
        <SwiperSlide>
          <HeroSection
            heading=" نظم وقتك وخطط لاسلوب حياة افضل"
            paragraph="يقدم لك متجر ميم ستور مجموعة من المدكرات و المخططات لزيادة انتاجيتك
            ومساعدتك على تطوير حياتك"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSection image="image_bg_2" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
