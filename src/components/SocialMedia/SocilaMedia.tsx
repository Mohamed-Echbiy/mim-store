import React from "react";
import { Facebook, Instagram, Tiktok, Whatsapp } from "../../Icons/icons";
import Card from "./Card";

function SocilaMedia() {
  return (
    <div>
      <h4 className="text-4xl text-center mb-10">Find Us</h4>
      <Card
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
      />
    </div>
  );
}

export default SocilaMedia;
