import { useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./book.css";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Qr, ShippingTruck, Whatsapp } from "../../Icons/icons";
import BookModule from "./BookModule";

interface book {
  imgs: [string, string?, string?];
  // field: string,
  pages: number;
  price: number;
  title: string;
  description?: string;
  paperFormat: string;
  isDiscount?: { state: boolean; discount: number };
  moduleOpen: boolean;
  setModule: any;
}

function Book({
  imgs,
  pages,
  price,
  isDiscount = { state: false, discount: 0 },
  title,
  paperFormat,
  moduleOpen,
  setModule,
}: book) {
  // calcluting the price after discount
  const [priceAfterDisc, setPrice] = useState("");
  if (isDiscount?.state && !priceAfterDisc) {
    const discountAmount = (isDiscount.discount / 100) * price;
    console.log(discountAmount, "iam discount amount");
    setPrice(() => (price - discountAmount).toFixed(1));
    console.log("i do it ");
  }
  console.log(priceAfterDisc, "iam state");
  return (
    <>
      <div
        className={`book w-full mb-10 flex flex-wrap items-center  py-6 md:border border-solid rounded-md `}
      >
        <div className="book_cover w-1/4 mx-10 flex-grow">
          <Swiper
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            navigation
            loop={true}
            grabCursor={true}
            // pagination={{ clickable: true }}
            className="book-swiper"
          >
            {imgs.map((img, i) => (
              <SwiperSlide key={i + 102}>
                <img
                  src={img}
                  alt=" cover image "
                  width={219}
                  height={278}
                  className="cover mx-auto px-2"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="information flex-grow w-8/12">
          <h3 className="book_title text-xl ml-1 text-center mt-5 xl:mt-0 xl:text-left md:text-3xl text-gray-700 pb-10 capitalize w-full border-b border-solid">
            {title}
          </h3>
          <p className="book_price my-4">
            <span className="text-2xl text-gray-700 font-bold">
              {isDiscount?.state ? `${priceAfterDisc}Dh` : `${price}Dh`}
            </span>{" "}
            {isDiscount && isDiscount.state && (
              <span className="text-gray-700">
                <span className=" line-through text-gray-400">{price}Dh</span> |{" "}
                <span className="text-red-400 text-sm">
                  save {isDiscount.discount}%
                </span>
              </span>
            )}
          </p>
          <ul className="book_details mb-3 flex-col flex sm:flex-row flex-wrap justify-between">
            <div className="details sm:w-2/4 flex-grow text-xs md:text-sm xl:text-base">
              <li className="mb-5">Book details:</li>
              <li className="book_pages mb-2">
                pages :{" "}
                <span className=" inline-block rounded-full">{pages}</span>
              </li>
              <li className="mb-5 sm:mb-2">
                Paper format : <span>{paperFormat}</span>
              </li>
            </div>
            <div className="delivery sm:w-2/4 flex-grow text-xs md:text-sm xl:text-base md:text-right pr-5">
              <li className="mb-5">Delivery details:</li>
              <li className="mb-2">الدفع عند الاستلام</li>
              <li className="mb-5 sm:mb-2">
                حاليا يتم الشحن فقط الى تارودانت و النواحي
              </li>
            </div>
          </ul>
        </div>
        <div className="whatsapp w-full flex justify-center sm:justify-end mr-10 mb-4 items-center">
          <a
            href="https://wa.me/message/AVVON7XODUTOP1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className=" what-button flex items-center bg-lime-400 px-4 py-2 rounded w-fit mr-5">
              <span className="mr-2 contact">Contact Me</span>
              <span className="whatsapp-icon">
                <Whatsapp />
              </span>
            </button>
          </a>
          <span
            className="qr-code w-8 cursor-pointer"
            onClick={() => setModule(true)}
          >
            <Qr />
          </span>
        </div>
      </div>
      {moduleOpen && <BookModule setModule={setModule} />}
    </>
  );
}

export default Book;

/*
744
969
348
502
*/
