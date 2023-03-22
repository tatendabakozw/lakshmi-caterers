import { data } from "@utils/data";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div
      className={`flex w-full h-full min-h-screen bg-no-repeat p-2 relative pt-20 overflow-hidden`}
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="md:w-2/3 w-full flex flex-row space-x-8 items-center col-span-1 z-10 pt-20">
          <div
            className={`md:flex hidden flex-col bg-slate-200 p-4 rounded-lg h-full space-y-12`}
          >
            {data.home_icons?.map((item, index) => (
              <span
                key={index}
                className={`${
                  item.name === "home" ? "text-green-light " : "text-slate-700 "
                } flex flex-col capitalize items-center`}
              >
                <item.icon height={32} width={32} />
                {item.name === "home" ? item.name : ""}
              </span>
            ))}
          </div>
          <div className=" md:pt-0 w-full inline-block  z-10 flex-col ">
            <p className="xl:text-6xl tracking-tight text-green-original text-4xl font-extrabold ">
              SHREE LAKSHMI CATERERS{" "}
            </p>
            <p className="text-3xl pt-8 pb-16">Your Event, Our Solution</p>
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              nostrum iure accusamus minima doloremque incidunt in nesciunt
              tenetur quidem. Aliquam temporibus quam obcaecati nisi, cupiditate
              corporis neque dolore veritatis tenetur. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Consectetur, commodi dolore
              mollitia culpa, eveniet deserunt numquam magnam veritatis itaque
              tempore nulla et, molestiae repellat error eius minus.
              Perspiciatis, voluptatem sint.
            </p>
          </div>
          {/* </CarouselItem>
              ))}
            </Carousel> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
