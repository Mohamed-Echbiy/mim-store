import "./heroSection.css";
interface heroSection {
  heading?: string;
  paragraph?: string;
  image?: string;
  module?: number;
}

function HeroSection({
  heading,
  paragraph,
  image = "image_bg",
  module = 1,
}: heroSection) {
  return (
    <div className="hero_section_container w-full">
      <div
        className={`${image} hero_image hero_text flex ${
          module === 1 ? "items-end" : "items-center"
        } justify-center w-4/5 `}
      >
        {heading && paragraph && module === 1 && (
          <div className="text-inside block md:px-8 md:py-4 px-2 py-1 w-4/5 mb-5 rounded-md text-center">
            {heading && (
              <h1 className=" text-base md:text-3xl lg:text-4xl mb-2">
                {heading}
              </h1>
            )}
            {paragraph && <p className=" text-xs md:text-sm">{paragraph}</p>}
          </div>
        )}
        {heading && paragraph && module === 2 && (
          <div className=" block text-center w-fit">
            <p className="  md:text-lg mb-2 font-bold text-xs text-gray-800">
              {paragraph}
            </p>
            <h1 className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light">
              {heading}
            </h1>
            <button className="discount mt-5 md:mt-10 block w-full py-1 px-6 md:py-2 md:px-10 bg-red-400 rounded-sm font-bold">
              <span className="discount_off text-gray-800 w-full block text-xs sm:text-sm md:text-base">
                41% OFF
              </span>
            </button>
          </div>
        )}
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
