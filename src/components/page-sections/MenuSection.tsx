import { Avatar } from "@chakra-ui/react";
import SectionsHeading from "@components/sections-heading/SectionsHeading";
import React from "react";

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
        {[1, 2, 3, 4].map((item, index) => (
          <div className="menu-container bg-slate-200 rounded-xl p-4">
            <p className="pb-4 text-slate-800 font-semibold">Starters</p>
            <div className="flex flex-col space-y-4">
              {[1,2,3,4,5,6,7].map((item, index)=>(
                <div className="flex flex-row items-center bg-white rounded-2xl ">
                <Avatar size={'lg'} />
                <p className="pl-8 w-full text-lg font-semibold">Chicken Fry</p>
              </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
