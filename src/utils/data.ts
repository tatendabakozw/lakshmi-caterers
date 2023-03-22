import logo from "@assets/logo.png";
import icon from "@assets/icon.png";
import {
  BookmarkSquareIcon,
  Bars3Icon,
  CakeIcon,
  HeartIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import cooperate_caterers from "@assets/cooperate-caterers.jpg";
import wedding_caterers from "@assets/wedding_caterers.jpg";

export const data = {
  site_info: {
    name: "Shree Lakshi Catering",
    slogan: "Catering Services",
    logo: logo,
    icon: icon,
    phone_1: "+363771445411",
    phone_2: "+363771445411",
    address:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium labore modi repellendus? Unde incidunt quaerat quod officiis, libero placeat numquam cum debitis aliquam dolor omnis, porro aliquid voluptas corporis aperiam?",
    email: 'email@email.com'
  },
  home_icons: [
    { icon: Bars3Icon, name: "bars" },
    { icon: HeartIcon, name: "heart" },
    { icon: HomeIcon, name: "home" },
    { icon: CakeIcon, name: "cake" },
    { icon: BookmarkSquareIcon, name: "book" },
  ],
  assets: {
    cooperate_caterers: cooperate_caterers,
    wedding_caterers: wedding_caterers,
  },
};
