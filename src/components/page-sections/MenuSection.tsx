import { Avatar } from "@chakra-ui/react";
import SectionsHeading from "@components/sections-heading/SectionsHeading";
import { veg_menu } from "@utils/menu_sections";
// @ts-ignore
import Slide from "react-reveal/Slide";

type Props = {};

const MenuSection = (props: Props) => {
  return (
    <div className="max-w-7xl w-full mx-auto flex flex-col py-16">
      <Slide botttom duration={500}>
        <SectionsHeading firstLetter="M" otherLetters="enu" />
      </Slide>
      <div className="flex">
        <Slide bottom duration={550}>
          <div className="flex bg-services-green p-3 my-8 text-lg text-slate-800 font-semibold text-center rounded-xl">
            Veg Items
          </div>
        </Slide>
      </div>

        <div className="grid md:grid-cols-3 grid-cols-1 mx-2 gap-12">
          {veg_menu.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="menu-container bg-slate-100 rounded-xl p-4">
                <p className="pb-4 text-slate-800 font-semibold">{item.name}</p>
                <div className="flex flex-col space-y-4">
                  {item.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center bg-white rounded-2xl "
                    >
                      <Avatar name="item.name" size={"lg"} src={item.image} />
                      <p className="pl-8 w-full text-lg font-semibold">
                        {item.name}
                      </p>
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
