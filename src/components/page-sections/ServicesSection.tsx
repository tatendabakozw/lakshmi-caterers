import SectionsHeading from "@components/sections-heading/SectionsHeading";
import { findFromArray } from "@helpers/arrayMethods";
import { data } from "@utils/data";
import { useState } from "react";
// @ts-ignore
import Slide from "react-reveal/Slide";

type Props = {};

const ServicesSection = (props: Props) => {
  const [selected_service, setSelectedService] = useState("name-one");
  const [selected_catering_type, setSelectedCateringType] =
    useState("Corporate-caterers");

  const services_tabs = [
    { name: "name one", _id: "name-one" },
    { name: "name two", _id: "name-two" },
    { name: "name three", _id: "name-three" },
    { name: "name four", _id: "name-four" },
  ];

  const catering_types = [
    {
      name: "Corporate Caterers",
      value: "Corporate-caterers",
      _id: "Corporate-caterers",
      sub_heading: "We can provide food to the stuff of a given organisation.",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A voluptatem vero voluptate unde exercitationem, iusto dolor? Dolores inventore, natus vel quae saepe voluptatem totam recusandae possimus ipsa. Sint, ratione quaerat. Nostrum totam ullam tempora possimus eaque quia, at facere soluta distinctio. Aliquid laudantium placeat nihil a doloribus mollitia inventore! Incidunt accusamus excepturi quos sed asperiores et odio nisi atque ratione!",
    },
    {
      name: "Wedding Caterers",
      value: "wedding-caterers",
      _id: "wedding-caterers",
      sub_heading: "We can provide food at a wedding service.",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A voluptatem vero voluptate unde exercitationem, iusto dolor? Dolores inventore, natus vel quae saepe voluptatem totam recusandae possimus ipsa. Sint, ratione quaerat. Nostrum totam ullam tempora possimus eaque quia, at facere soluta distinctio. Aliquid laudantium placeat nihil a doloribus mollitia inventore! Incidunt accusamus excepturi quos sed asperiores et odio nisi atque ratione!",
    },
    {
      name: "Personal Caterers",
      value: "personal-caterers",
      _id: "personal-caterers",
      sub_heading: "We can also cater for personal catering services.",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A voluptatem vero voluptate unde exercitationem, iusto dolor? Dolores inventore, natus vel quae saepe voluptatem totam recusandae possimus ipsa. Sint, ratione quaerat. Nostrum totam ullam tempora possimus eaque quia, at facere soluta distinctio. Aliquid laudantium placeat nihil a doloribus mollitia inventore! Incidunt accusamus excepturi quos sed asperiores et odio nisi atque ratione!",
    },
  ];

  console.log();

  return (
    <div className="max-w-7xl w-full mx-auto flex flex-col  overflow-x-hidden">
      <Slide bottom duration={500}>
        <SectionsHeading firstLetter="S" otherLetters="ervices" />
      </Slide>
      <Slide bottom duration={700}>
        <div
          className="relative overflow-hidden flex flex-col items-end rounded-2xl p-8 mx-2 mt-16"
          style={{
            backgroundImage: `url(${data.assets.services_bg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%",
          }}
        >
          <div className="overlay absolute  top-0 right-0 left-0 bottom-0 bg-black z-0 opacity-40"></div>
          <p className="text-4xl z-10 text-services-green font-bold uppercase">
            {findFromArray(catering_types, selected_catering_type).name}
            {/* Corporate caterers */}
          </p>
          <p className="py-8 text-xl font-semibold text-white z-10">
            {findFromArray(catering_types, selected_catering_type).sub_heading}
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
          </p>
          <p className="z-10 text-slate-200 md:w-2/3 w-full md:text-right text-center">
            {findFromArray(catering_types, selected_catering_type).description}
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
                } item border cursor-pointer flex-1 text-center w-full rounded-full px-4 py-2 `}
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
      </Slide>

      <Slide bottom duration={800}>
        <div className="flex flex-row pt-8">
          <div className="flex md:flex-row flex-col items-center gap-8 w-full justify-between ">
            {catering_types.map((item, index) => (
              <span
                key={index}
                onClick={() => setSelectedCateringType(item.value)}
                className={`${
                  selected_catering_type === item.value
                    ? "border-2 border-green-light"
                    : ""
                } relative overflow-hidden rounded-2xl p-12 grid items-center content-center justify-center`}
                style={{
                  backgroundImage: `url(${data.assets.wedding_caterers})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "100%",
                }}
              >
                <div className="overlay absolute top-0 right-0 left-0 bottom-0 bg-black z-0 opacity-40"></div>
                <p className="absolute text-white z-40 text-center left-0 right-0">
                  {item.name}
                </p>
              </span>
            ))}
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default ServicesSection;
