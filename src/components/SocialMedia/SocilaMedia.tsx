import { Facebook, Instagram, Tiktok, Whatsapp } from "../../Icons/icons";
import Card from "./Card";
import "./social.css";

function SocilaMedia() {
  return (
    <div>
      <h4 className="text-4xl text-center mb-16">Find Us</h4>
      {/* <Card
        bg_style="bg-instagram"
        href="https://www.instagram.com/maryam_bougari/"
        Icon={<Instagram />}
        platformName="instagram"
      />
      <Card
        bg_style="bg-tiktok"
        href="#"
        Icon={<Tiktok />}
        platformName="TikTok"
      />
      <Card
        bg_style="bg-facebook"
        href="https://www.facebook.com/profile.php?id=100086540135390"
        Icon={<Facebook />}
        platformName="Facebook"
      />
      <Card
        bg_style="bg-whatsapp"
        href="https://wa.me/message/AVVON7XODUTOP1"
        Icon={<Whatsapp />}
        platformName="Whatsapp"
      /> */}
      <div className="media_container flex justify-between items-center max-w-xl md:px-8 py-4 mx-auto rounded-t-3xl ">
        <div className="icon text-pink-400 w-1/5">
          <a
            href="https://www.instagram.com/maryam_bougari/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
            <p className=" py-1 rounded-md bg-white text-xs md:text-base">
              Follow me
            </p>
          </a>
        </div>
        <div className="icon text-blue-400 w-1/5">
          <a
            href="https://www.facebook.com/profile.php?id=100086540135390"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
            <p className=" py-1 rounded-md bg-white text-xs md:text-base">
              Follow me
            </p>
          </a>
        </div>
        <div className="icon text-green-400 w-1/5">
          <a
            href="https://wa.me/message/AVVON7XODUTOP1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Whatsapp />
            <p className=" py-1 rounded-md bg-white text-xs md:text-base">
              Contact me
            </p>
          </a>
        </div>
        <div className="icon w-1/5">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Tiktok />
            <p className=" py-1 rounded-full bg-white text-xs md:text-base">
              Follow me
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocilaMedia;
