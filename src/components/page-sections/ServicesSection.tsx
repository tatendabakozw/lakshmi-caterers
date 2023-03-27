import SectionsHeading from "@components/sections-heading/SectionsHeading";
import { data } from "@utils/data";
import { useState } from "react";

type Props = {};

const ServicesSection = (props: Props) => {
  const [selected_service, setSelectedService] = useState("name-one");
  const services_tabs = [
    { name: "name one", _id: "name-one" },
    { name: "name two", _id: "name-two" },
    { name: "name three", _id: "name-three" },
    { name: "name four", _id: "name-four" },
  ];
  return (
    <div className="max-w-7xl w-full mx-auto flex flex-col  overflow-x-hidden">
      <SectionsHeading firstLetter="S" otherLetters="ervices" />
      <div
        className="relative overflow-hidden flex flex-col items-end rounded-2xl p-8 mt-16"
        style={{
          backgroundImage: `url(${data.assets.cooperate_caterers})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <div className="overlay absolute  top-0 right-0 left-0 bottom-0 bg-black z-0 opacity-40"></div>
        <p className="text-4xl z-10 text-services-green font-bold uppercase">
          Corporate caterers
        </p>
        <p className="py-8 text-xl font-semibold text-white z-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="z-10 text-slate-200 w-2/3 text-right">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A voluptatem
          vero voluptate unde exercitationem, iusto dolor? Dolores inventore,
          natus vel quae saepe voluptatem totam recusandae possimus ipsa. Sint,
          ratione quaerat. Nostrum totam ullam tempora possimus eaque quia, at
          facere soluta distinctio. Aliquid laudantium placeat nihil a doloribus
          mollitia inventore! Incidunt accusamus excepturi quos sed asperiores
          et odio nisi atque ratione!
        </p>

        <div className="flex md:flex-row flex-col items-center z-10 pt-16 justify-between w-full gap-8">
          {services_tabs.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(item._id)}
              className={`${
                item._id === selected_service
                  ? "bg-services-green text-slate-800 border-services-green "
                  : "text-white border-white "
              } item border cursor-pointer flex-1 text-center  rounded-full px-4 py-2 `}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className="pt-8 w-full text-center text-white z-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum
          facere quae dolorem illum consequuntur ipsam assumenda suscipit aut
          sed, quis temporibus iusto ipsa minus repellendus fugit fuga nobis
          voluptatum!
        </div>
      </div>

      <div className="flex flex-row pt-8">
        <div className="flex md:flex-row flex-col items-center gap-8 w-full justify-between ">
          {[1, 2, 3].map((item, index) => (
            <span
              key={index}
              className="relative overflow-hidden rounded-2xl p-12 grid items-center content-center justify-center"
              style={{
                backgroundImage: `url(${data.assets.wedding_caterers})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100%",
              }}
            >
              <div className="overlay absolute top-0 right-0 left-0 bottom-0 bg-black z-0 opacity-40"></div>
              <p className="absolute text-white z-40 text-center left-0 right-0">Wedding Caterers</p>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
