import { Avatar, Text } from "@chakra-ui/react";
import RatingComponent from "@components/rating/RatingComponent";
import React from "react";

type Props = {};

const TestimonialsSection = (props: Props) => {
  const testimonials = [
    {
      name: "Janardhan",
      testimony: `On three occasions we used the
            services of "Shree Lakshmi Catering."
            For the celebration of our 50th
            anniversary In 2007, for the reception
            after my partner's funeral In 2011 and
            for the party for my 80th birthday In
            2013.We requested vegan food. All
            the guests were unanimous in
            declaring that the food was superb. It
            was very tasty and there was a good
            variety. It was served on time and was
            plentiful`,
    },
    {
        name: "Mary",
        testimony: `Wish you well and encourage you
        to continue serving our community
        with healthy beautifully prepared
        food as you catered for us. It was a
        pleasure knowing that the food you
        served us was thoughtfully
        sourced, local, fair trade and
        organic.`,
      },
      {
        name: "Santosh",
        testimony: `The service is as extraordinary as their
        menu. Shree Lakshmi Catering's food is
        local, healthy, delicious, colorful, alive
        and was a big point of discussion
        among our clients. The beet and carrot
        salad was a huge hit, and everyone
        commented on how they have never
        had such tasty healthy food at an office
        event.`,
      },
      {
        name: "Harika",
        testimony: `Shree Lakshmi Catering's foodisdelicious!
        My guests andI lovedthe foodandthere
        wereplenty of leftovers! TheService
        provided was right on time, they set it all
        upforme. andpicked- itupright away!
        Thankyou,Shree Lakshmi Catering, for
        taking the stress out of cooking and
        cleaning! I willbe ordering again formy
        next catering event`,
      },
  ];
  return (
    <div className=" bg-slate-100 w-full py-16 flex-wrap">
      <p className="capitalize pb-2 text-slate-900 text-3xl font-semibold text-center">
        Why our Customers Love us
      </p>
      <p className="pb-16 text-slate-500 text-center ">
        Get a few testimonials from our customers on why our services are great
      </p>
      <div className="max-w-7xl w-full mx-auto px-2 grid md:grid-cols-4 grid-cols-1 gap-8 justify-around">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex flex-col p-4 space-y-2 rounded-lg bg-white shadow"
          >
            <Avatar name={item.name} size={"xl"} />
            <p className="text-slate-900 font-semibold text-lg">{item.name}</p>
            <RatingComponent ratings={4} />
            <Text noOfLines={10}>
                {item.testimony}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
