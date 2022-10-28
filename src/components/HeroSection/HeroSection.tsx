import "./heroSection.css";
import image from "../../images/3961975.png";

function HeroSection() {
  return (
    <div className="hero_section flex flex-wrap-reverse sm:flex-nowrap flex-row-reverse items-center justify-between">
      <div className="hero_section_image">
        <img src={image} alt="person checking list of things she has to do" />
      </div>
      <div className="hero_section-textContent">
        <div className=" max-w-3xl mx-auto text-center">
          <h2 className="hero_section_heading text-3xl sm:text-5xl xl:text-7xl md:mb-4 xl:mb-8 font-bold">
            نظم وقتك وخطط لاسلوب حياة افضل
          </h2>
          <p className="hero_section_paragraph text-xs sm:text-sm md:text-base xl:text-xl text-gray-800 font-light max-w-md mx-auto">
            يقدم لك متجر{" "}
            <span className="hero_section_sepcialText">ميم ستور</span> مجموعة من
            المدكرات لزيادة انتاجيتك ومساعدتك على تطوير حياتك وتحقيق اهدافك
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
