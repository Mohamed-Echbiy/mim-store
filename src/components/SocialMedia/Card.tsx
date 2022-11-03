import { ReactNode } from "react";
import "./card.css";
interface Card {
  Icon: ReactNode;
  bg_style: string;
  platformName: string;
  href: string;
  styling?: string;
  img?: string;
}

function Card({
  Icon,
  bg_style,
  platformName,
  href,
  styling = "",
  img = "",
}: Card) {
  return (
    <div
      className={`card_container overflow-hidden px-4 py-4 rounded mb-4 ${styling} ${bg_style}`}
    >
      <h4 className="platform_name text-3xl uppercase text-center mb-5 flex items-center justify-center">
        {platformName} <span className="ml-2">{Icon}</span>
      </h4>
      {img && (
        <div className="image_container">
          <img src={img} alt="qr code" />
        </div>
      )}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center mt-5"
      >
        <button
          className={`border border-solid px-4 py-2 rounded ${
            platformName == "Facebook" || platformName == "Whatsapp"
              ? "border-black"
              : ""
          }`}
        >
          Follow me
        </button>
      </a>
    </div>
  );
}

export default Card;
