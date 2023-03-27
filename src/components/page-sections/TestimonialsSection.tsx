import { Avatar, Text } from "@chakra-ui/react";
import RatingComponent from "@components/rating/RatingComponent";
import React from "react";

type Props = {};

const TestimonialsSection = (props: Props) => {
  return (
    <div className=" bg-slate-100 w-full py-16 flex-wrap">
        <p className="capitalize pb-2 text-slate-900 text-3xl font-semibold text-center">Why out Customers Love us</p>
        <p className="pb-16 text-slate-500 text-center ">Get a few testimonials from our customers on why our services are great</p>
      <div className="max-w-7xl w-full mx-auto px-2 grid md:grid-cols-4 grid-cols-1 items-center gap-8 justify-around">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div key={index} className="flex flex-col p-4 space-y-2 rounded-lg bg-white shadow">
            <Avatar size={'xl'} />
            <p className="text-slate-900 font-semibold text-lg">name</p>
            <RatingComponent ratings={4} />
            <Text noOfLines={5}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, temporibus vel asperiores voluptate dolores atque rerum laborum praesentium nihil animi pariatur fugit odio sint ducimus consectetur! Nisi nemo a porro.
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
