import "./heroSection.css";
import image from "../../images/3961975.png";

function HeroSection() {
  return (
    <div className="hero_section_container w-full">
      <div className="hero_image hero_text flex items-end justify-center w-4/5 mt-40 sm:mt-34 md:mt-28">
        <div className="text-inside block md:px-8 md:py-4 px-2 py-1 w-4/5 mb-5 rounded-md text-center">
          <h1 className=" text-base md:text-3xl lg:text-4xl mb-2">
            نظم وقتك وخطط لاسلوب حياة افضل
          </h1>
          <p className=" text-xs md:text-sm">
            يقدم لك متجر ميم ستور مجموعة من المدكرات و المخططات لزيادة انتاجيتك
            ومساعدتك على تطوير حياتك
          </p>
        </div>
      </div>
      {/* <div className="text-outside w-full border drop-shadow-sm bg-white px-8 sm:hidden py-4 mt-1 mb-5 rounded-md text-center">
        <h1 className=" text-base md:text-4xl mb-2">
          نظم وقتك وخطط لاسلوب حياة افضل
        </h1>
        <p className=" text-xs md:text-sm">
          يقدم لك متجر ميم ستور مجموعة من المدكرات و المخططات لزيادة انتاجيتك
          ومساعدتك على تطوير حياتك
        </p>
      </div> */}
    </div>
  );
}

export default HeroSection;
