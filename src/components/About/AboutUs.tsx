import "./about.css";

function AboutUs() {
  return (
    <div
      id="About"
      className="About-container border border-solid py-10 px-2 mb-16"
    >
      <h3 className="mb-5 text-4xl text-center">About Us </h3>
      <p className="text-center">
        {/* <span className="text-center text-xl block mb-4">
          متجر ميم ستور يرحب بك
        </span> */}
        <span className="block text-gray-800 mb-4">
          بما انك تقرا هذا الوصف فاعلم انك في طريق النجاح و التطور فكن فخورا
          بنفسك
        </span>
        <span className="quote text-xs sm:text-sm md:text-base block w-fit mx-auto rounded text-center mb-6 bg-gray-500 text-gray-100 py-2 px-4 font-light">
          ' إن قضاء سبع ساعات في التخطيط بأفكار و أهداف واضحة لهو أحسن و أفضل
          نتيجة من قضاء سبعة أيام دون توجيه أو هدف '
        </span>
        <span className="about-text-content text-gray-700 max-w-2xl block mx-auto text-xs md:text-sm lg:text-base ">
          يساعدك متجر ميم ستور في ادارة وقتك و التخطيط الفعال لمستقبلك و رفع من
          انتاجيتك وهدا بتوفير مجموعة من المدكرات التي تتبع احدث النظريات وافضل
          الطرق لتحقيق نتائج فمهما كان هدفك نتائج دراسية او الحصول على ترقية او
          اتباع حمية مدكرات ميم ستور ستساعدك حتما
        </span>
      </p>
    </div>
  );
}

export default AboutUs;
