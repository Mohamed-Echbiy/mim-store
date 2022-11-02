import React from "react";
import { Close } from "../../Icons/icons";

function BookModule({ setModule }: any) {
  return (
    <div className="fixed left-0 top-0 w-full  bg-white z-50 ease-linear duration-75">
      <div className="Qr w-full h-screen  mx-auto py-5 relative">
        <img
          src="./whatsapp.jpeg"
          alt="qr Code"
          className="h-full mx-auto rounded-md"
        />
        <span
          className="right-5 top-10 absolute cursor-pointer"
          onClick={() => setModule(false)}
        >
          <Close />
        </span>
      </div>
    </div>
  );
}

export default BookModule;
