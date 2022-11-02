import { useState } from "react";
import Book from "./Book";
import "./books.css";

function Books() {
  const [moduleOpen, setModule] = useState(false);
  return (
    <div
      id="Products"
      className={`books_container flex flex-wrap mt-16 mx-auto ${
        moduleOpen && ""
      }`}
    >
      <Book
        imgs={["./cover4.png", "./cover2.png"]}
        pages={98}
        price={79}
        title="To Do List"
        isDiscount={{ state: true, discount: 53 }}
        paperFormat="A5"
        moduleOpen={moduleOpen}
        setModule={setModule}
      />
      <Book
        imgs={["./cover5.png", "./cover3.png"]}
        pages={25}
        price={103}
        title="Student Planner  |  مخطط الدراسة"
        isDiscount={{ state: true, discount: 53 }}
        paperFormat="A5"
        moduleOpen={moduleOpen}
        setModule={setModule}
      />
      <Book
        imgs={["./cover6.png", "./cover1.png"]}
        pages={98}
        price={94}
        title="Daily Planner"
        isDiscount={{ state: true, discount: 53 }}
        paperFormat="A5"
        moduleOpen={moduleOpen}
        setModule={setModule}
      />
    </div>
  );
}

export default Books;
// 926 , 643, 244 , 592
