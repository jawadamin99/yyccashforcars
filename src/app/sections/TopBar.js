import { Facebook, Instagram, MapPin, Phone, Send, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function TopBar() {
  return (
    <div className="w-full py-3 px-4 md:px-8 lg:px-12 2xl:px-20 flex bg-gradient-to-r from-primary to-secondary text-white ">
      <div className="w-full lg:w-2/3 flex justify-between md:justify-start md:gap-5 items-center font-bold">
        <div className="flex gap-2 items-center">
          <Send size={20} className="text-white" />
          <Link href={"mailto:info@yyccashforcars.com"}>
            <p className="text-xs lg:text-sm">info@yyccashforcars.com</p>
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <Phone size={20} className="text-white" />
          <Link href={"tel:+15877009806"}>
            <p className="text-xs lg:text-sm">587-700-9806</p>
          </Link>
        </div>
        <div className="gap-2 items-center hidden md:flex">
          <MapPin size={20} className="text-white" />
          <p className="text-xs lg:text-sm">
            Calgary and Nearby
          </p>
        </div>
      </div>
      <div className="w-1/3 hidden md:flex justify-end">
        <div className="flex items-center space-x-4">
          <Link
            href={
              "https://www.facebook.com/people/YYC-Cash-For-Cars/100083270712666/#"
            }
            target="_blank"
          >
            <Facebook size={20} className="text-white" />
          </Link>

          <Link
            href={"https://www.instagram.com/yyc_cash_for_cars/"}
            target="_blank"
          >
            <Instagram size={20} className="text-white" />
          </Link>
          <Link
            href={
              "https://www.tiktok.com/@yyccashforcars?_t=ZM-8wxT3aUj0GW&_r=1"
            }
            target="_blank"
          >
            <Image src={"/images/icons/tiktok.png"} width={20} height={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
