import "./book.css";

interface book {
  img: string;
  // field: string,
  pages?: number;
  price?: string;
  isDiscount?: { state: boolean; discount: number };
}

function Book({ img, pages, price, isDiscount }: book) {
  return (
    <div className="book w-2/4 sm:w-1/3 lg:w-1/6 flex-grow mb-5">
      <div className="book_cover px-2 lg:px-4 mx-auto hover:scale-110 ease-in-out duration-500 hover:z-10 cursor-pointer">
        <img
          src={img}
          alt="image 1"
          width={219}
          height={278}
          className="cover mx-auto"
        />
      </div>
      <p className="book_price">{price}</p>
    </div>
  );
}

export default Book;

/*
744
969
348
502
*/
