import "./heroSection.css";
interface heroSection {
  heading?: string;
  paragraph?: string;
  image?: string;
}

function HeroSection({ heading, paragraph, image = "image_bg" }: heroSection) {
  return (
    <div className="hero_section_container w-full">
      <div
        className={`${image} hero_image hero_text flex items-end justify-center w-4/5 mt-40 sm:mt-34 md:mt-28`}
      >
        {heading && paragraph && (
          <div className="text-inside block md:px-8 md:py-4 px-2 py-1 w-4/5 mb-5 rounded-md text-center">
            {heading && (
              <h1 className=" text-base md:text-3xl lg:text-4xl mb-2">
                {heading}
              </h1>
            )}
            {paragraph && <p className=" text-xs md:text-sm">{paragraph}</p>}
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
