import { Avatar } from "@chakra-ui/react";
import SectionsHeading from "@components/sections-heading/SectionsHeading";
import React from "react";
import food from '@assets/wedding_caterers.jpg'
import { veg_menu } from "@utils/menu_sections";

type Props = {};

const MenuSection = (props: Props) => {

  return (
    <div className="max-w-7xl w-full mx-auto flex flex-col py-16">
      <SectionsHeading firstLetter="M" otherLetters="enu" />
      <div className="flex">
        <div className="flex bg-services-green p-3 my-8 text-lg text-slate-800 font-semibold text-center rounded-xl">
          Veg Items
        </div>
      </div>

      <div className="grid grid-cols-3 gap-12">
        {veg_menu.map((item, index) => (
         <div key={index}  className="flex flex-col">
           <div className="menu-container bg-slate-100 rounded-xl p-4">
            <p className="pb-4 text-slate-800 font-semibold">{item.name}</p>
            <div className="flex flex-col space-y-4">
              {item.items.map((item, index)=>(
                <div key={index} className="flex flex-row items-center bg-white rounded-2xl ">
                <Avatar size={'lg'} src={food} />
                <p className="pl-8 w-full text-lg font-semibold">{item.name}</p>
              </div>
              ))}
            </div>
          </div>
         </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
