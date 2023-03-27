import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/outline";
import { data } from "@utils/data";
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex flex-col pt-8">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 pb-16  max-w-7xl w-full mx-auto ">
        <div className="col-span-1">
          <div className="flex flex-row items-center space-x-4">
            <PhoneArrowDownLeftIcon height={24} width={24} />
            <div className="flex flex-col md:items-start">
              <p className="uppercase text-slate-900 font-semibold">Phone</p>
              <p className=" text-services-green">
                {data.site_info.phone_1}
                {data.site_info.phone_2 ? `/${data.site_info.phone_2}` : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-row space-x-4">
            <div className="flex">
              <MapPinIcon height={24} width={24} />
            </div>
            <div className="flex flex-col">
              <p className="uppercase text-slate-900 font-semibold">Address</p>
              <p className=" text-services-green">{data.site_info.address}</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col space-y-8">
          <div className="flex flex-row space-x-4">
            <div className="flex">
              <EnvelopeIcon height={24} width={24} />
            </div>
            <div className="flex flex-col">
              <p className="uppercase text-slate-900 font-semibold">Address</p>
              <p className=" text-services-green">{data.site_info.email}</p>
            </div>
          </div>
          <div className="flex flex-row space-x-4 text-green-original items-center">
            <FaYoutube size={24} color="" />
            <FaInstagram size={24} color="" />
            <FaFacebookF size={24} color="" />
            <FaTwitter size={24} color="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full bg-services-green p-4">
        <p className="font-semibold text-end text-lg text-slate-900 ">
          {data.site_info.name}
        </p>
      </div>
    </div>
  );
};

export default Footer;
