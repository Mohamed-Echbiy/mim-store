import Book from "./Book";
import "./books.css";

function Books() {
  return (
    <div
      id="Products"
      className="books_container flex justify-center items-center flex-wrap mt-16 mx-auto"
    >
      <Book
        img={"./cover1.png"}
        pages={16}
        isDiscount={{ state: true, discount: 53 }}
      />
      <Book
        img={"./cover2.png"}
        pages={16}
        isDiscount={{ state: true, discount: 53 }}
      />
      <Book
        img={"./cover3.png"}
        pages={16}
        isDiscount={{ state: true, discount: 53 }}
      />
      <Book
        img={"./cover4.png"}
        pages={16}
        isDiscount={{ state: true, discount: 53 }}
      />
      <Book
        img={"./cover5.png"}
        pages={16}
        isDiscount={{ state: true, discount: 53 }}
      />
      <Book
        img={"./cover6.png"}
        pages={16}
        isDiscount={{ state: true, discount: 53 }}
      />
    </div>
  );
}

export default Books;
