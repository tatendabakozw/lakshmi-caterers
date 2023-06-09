import logo from "@assets/logo.png";
import icon from "@assets/icon.png";
import {
  BookmarkSquareIcon,
  Bars3Icon,
  CakeIcon,
  HeartIcon,
  HomeIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";
import cooperate_caterers from "@assets/cooperate-caterers.jpg";
import wedding_caterers from "@assets/wedding_caterers.jpg";
import services_bg from '@assets/services_bg.jpeg'

export const data = {
  site_info: {
    name: "Shree Lakshmi Catering",
    slogan: "Tasty & Quality food at reasonable rates",
    logo: logo,
    icon: icon,
    phone_1: "+9198143611625",
    // phone_2: "+91 81436 11625",
    address:
      "Plot No 70 & 83, Survey No: 649, Chennapuram Village, Jawahar Nagar, Municipal Corporation, Kapra Mandal, Medchal, Malkajigiri District, Hyd - 500087, TS.",
    email: "caterersshreelakshmi@gmail.com",
  },
  home_icons: [
    { icon: Bars3Icon, name: "bars" },
    { icon: HeartIcon, name: "heart" },
    { icon: HomeIcon, name: "home" },
    { icon: PhotoIcon, name: "gallery" },
    { icon: BookmarkSquareIcon, name: "book" },
  ],
  assets: {
    cooperate_caterers: cooperate_caterers,
    wedding_caterers: wedding_caterers,
    services_bg: services_bg
  },
};

// shree-lakshmi-caterers-menu
