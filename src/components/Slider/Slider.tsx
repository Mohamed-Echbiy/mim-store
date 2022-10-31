import { Swiper, SwiperSlide } from "swiper/react";
import HeroSection from "../HeroSection/HeroSection";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper";

function Slider() {
  return (
    <div>
      <Swiper
        spaceBetween={5}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        className="mt-40 sm:mt-34 md:mt-28"
      >
        <SwiperSlide className="rounded">
          <HeroSection
            heading=" نظم وقتك وخطط لاسلوب حياة افضل"
            paragraph="يقدم لك متجر ميم ستور مجموعة من المدكرات و المخططات لزيادة انتاجيتك
            ومساعدتك على تطوير حياتك"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSection
            image="image_bg_2"
            paragraph="NOTEBOOK"
            heading="عرض خاص"
            module={2}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
