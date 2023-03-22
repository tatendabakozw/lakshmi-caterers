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
    name: "Shree Lakshi",
    slogan: "Catering Services",
    logo: logo,
    icon: icon,
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
