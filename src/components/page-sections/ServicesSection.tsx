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
    {
      name: "Team Lunches:",
      _id: "name-one",
      description:
        "Planning for a team lunch this week? You don’t need to step out of the comfort of your office. Just call Shree Lakshmi Caterers and relish the best team lunch & conversation without leaving the comfort of your air-conditioned office. Plan your upcoming project with our top-notch food.",
    },
    {
      name: "Meetings & Training",
      _id: "name-two",
      description: `Meetings and training are a very important part of any successful corporation. Great food caters as an impetus & helps employee in coming out with ground-breaking ideas for all projects. So, make your corporate meeting and training sessions encouraging with our best quality food.`,
    },
    {
      name: "Corporate Events",
      _id: "name-three",
      description: `Looking for a corporate caterer in Hyderabad for your upcoming corporate event? Let Shree Lakshmi Caterers take the charge and wow your guests with top-quality foods. Whether it is a media event or product lunch food from us is the best and safest investment you can make.`,
    },
    {
      name: "Office Celebrations",
      _id: "name-four",
      description: `We understand how critical those small wins & achievements can be! Be it   cracking an awesome deal or reaching the required sales target celebrate your employees’ milestone with the best corporate caterer in Hyderabad by your side. Enjoy your wins with scrumptious and healthy foods from Shree Lakshmi Caterers.

    We give strict attention to the requirements when we serve any corporate client. For example, if you’ve some international clients visiting your office we can tailor the menu as per their taste & preferences. We regularly update ourselves on both local and internal cuisines. Once you let us know your requirement, rest assured that you are going to enjoy the best corporate catering service in Hyderabad.`,
    },
  ];

  const catering_types = [
    {
      name: "Corporate Caterers",
      value: "Corporate-caterers",
      _id: "Corporate-caterers",
      sub_heading: "Highly Recommended Corporate Caterers in Hyderabad.",
      description: `Shree Lakshmi Caterers For highly experienced and skilled corporate caterers in Hyderabad, look no further! Here at Shree Lakshmi Caterers, we offer top-class cuisine & innovating catering solutions for our valued corporate clients. From business lunches to formal dinners, we can offer full-service catering solutions tailored to your workforce requirements.
        Our devotion & commitment to serving quality food has earned us so many loyal corporate clients. From the CEO of the organization to the employees working in the lowest rung, we ensure to fulfil the gastronomical delights of your whole workforce.`,
    },
    {
      name: "Wedding Caterers",
      value: "wedding-caterers",
      _id: "wedding-caterers",
      sub_heading:
        "Shree Lakshmi Caterers – Best Wedding Catering Service in Hyderabad.",
      description: `Wedding is a personal reflection of two individuals and deserves a perfectly designed wedding menu. Jyothi Caterers specializes in providing the best wedding catering service in Hyderabad. Our wedding catering planners will listen, suggest and create uniquely designed menus for unforgettable wedding experiences.

        From first bites to last crumbs, our expert wedding caterers in Hyderabad will serve you only the best. We believe that there’s no better place to showcase your love than in Hyderabad. Contact us today for the superior class catering in Hyderabad.`,
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
    <div className="max-w-7xl w-full mx-auto flex flex-col pb-16  overflow-x-hidden">
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

          {selected_catering_type === "Corporate-caterers" && (
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
          )}
          <div className="pt-8 w-full text-center text-white z-10">
          {findFromArray(services_tabs, selected_service).description}
          </div>
        </div>
      </Slide>

      <Slide bottom duration={800}>
        <div className="flex flex-row pt-8">
          <div className="flex md:flex-row flex-col items-center gap-8 w-full justify-between ">
            {catering_types.map((item, index) => (
              
              <div
              key={index}
                className={`flex  w-full ${
                  selected_catering_type === item.value
                    ? "border-2 border-green-light "
                    : " "
                } rounded-2xl`}
              >
                <div className="border-2 border-white w-full rounded-2xl">
                  <span
                    onClick={() => setSelectedCateringType(item.value)}
                    className={`${
                      selected_catering_type === item.value ? "" : ""
                    } relative overflow-hidden rounded-2xl p-12 grid items-center content-center justify-center w-full`}
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default ServicesSection;
