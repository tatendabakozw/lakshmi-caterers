import SectionsHeading from "@components/sections-heading/SectionsHeading";
import React from "react";

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <div
      className={`flex  h-full max-w-7xl flex-col w-full mx-auto min-h-screen bg-no-repeat p-2 relative pt-20 overflow-hidden`}
    >
      <SectionsHeading firstLetter="A" otherLetters="bout" />
      <div className="pt-16">
        <div className="md:w-2/3 w-full flex flex-row items-center">
          <div className=" md:pt-0 w-full inline-block  z-10 flex-col  ">
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              nostrum iure accusamus minima doloremque incidunt in nesciunt
              tenetur quidem. Aliquam temporibus quam obcaecati nisi, cupiditate
              corporis neque dolore veritatis tenetur. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Consectetur, commodi dolore
              mollitia culpa, eveniet deserunt numquam magnam veritatis itaque
              tempore nulla et, molestiae repellat error eius minus.
              Perspiciatis, voluptatem sint. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Praesentium obcaecati assumenda
              commodi quis eveniet architecto suscipit quidem consectetur
              distinctio dolorum amet, at aspernatur odio saepe ipsam laborum
              veniam quibusdam pariatur. Reiciendis maxime quasi corporis fuga
              recusandae suscipit vel est nesciunt, quia consequatur
              exercitationem quaerat impedit necessitatibus tempore fugiat
              pariatur accusamus provident eos. Modi non maiores libero optio
              molestiae magnam laboriosam! Fugit quasi modi repellat porro
              praesentium eaque placeat aliquid incidunt quo minus harum
              perspiciatis architecto eveniet voluptatum dolorem deleniti
              voluptatem amet cumque explicabo libero, velit omnis reiciendis.
              Libero, hic delectus?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
