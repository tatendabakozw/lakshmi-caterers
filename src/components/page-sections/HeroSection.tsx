import { data } from "@utils/data";
import food_banner from "@assets/food_banner.png";
// @ts-ignore
import Slide from "react-reveal/Slide";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div
      className={`flex w-full h-full min-h-screen bg-no-repeat p-2 relative pt-20 overflow-hidden`}
    >
      <div className="max-w-7xl grid md:grid-cols-2 grid-cols-1 w-full mx-auto">
        <div className="col-span-1 w-full flex flex-row space-x-8 items-center z-10">
          <Slide right duration={600}>
            <div className="flex">
              <div
                className={`md:flex hidden flex-col bg-slate-200 p-4 rounded-lg h-full space-y-12`}
              >
                {data.home_icons?.map((item, index) => (
                  <span
                    key={index}
                    className={`${
                      item.name === "home"
                        ? "text-green-light "
                        : "text-slate-700 "
                    } flex flex-col capitalize items-center`}
                  >
                    <item.icon height={32} width={32} />
                    {item.name === "home" ? item.name : ""}
                  </span>
                ))}
              </div>
            </div>
          </Slide>
          <Slide right duration={800}>
            <div className=" md:pt-0 w-full inline-block  z-10 flex-col ">
              <p className="xl:text-6xl tracking-tight text-green-original text-4xl font-extrabold ">
                SHREE LAKSHMI CATERERS{" "}
              </p>
              <p className="text-3xl pt-8 pb-16">Your Event, Our Solution</p>
              <p className="text-slate-500">
                Shree Laxmi Caterers, we are there in the Catering service
                Industry since 2007. As we grow, we never forget where we came
                from and what we are trying to achieve. Our loyal customers are
                big part of our success that helped us at every step of our
                journey by providing us continuous feedback. We will do whatever
                our customer demands to improve our services. We have remained
                true to our roots of promising to serve best quality food with
                the good taste. We have a Passion to succeed and earn respect in
                the industry. We do not believe in making false claims instead
                we offer honest advice, excellent taste at best prices. It has
                been our policy to treat every client with utmost integrity and
                the highest degree of professionalism.
              </p>
            </div>
          </Slide>
        </div>
        <div className="flex col-span-1">
          <Slide right duration={1000}>
            <img src={food_banner} alt="" className="object-contain" />
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
