import SectionsHeading from "@components/sections-heading/SectionsHeading";
import food from "@assets/wedding_caterers.jpg";
import { useState } from "react";
import video from '@assets/video/video.mp4'

type Props = {};

const GallerySection = (props: Props) => {
  const [itemsToShow, setItemsToShow] = useState(10);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8, 7, 6, 5, 4, 3, 1];

  const showmore = () => {
    setItemsToShow(arr.length);
  };

  const showless = () => {
    setItemsToShow(3);
  };

  return (
    <div className="max-w-7xl w-full mx-auto flex flex-col py-16">
      <SectionsHeading firstLetter="G" otherLetters="allery" />
      <p className="pt-8 pb-4 text-lg font-semibold">Images</p>

      <div className="grid md:grid-cols-5 grid-cols-2 md:gap-8 gap-4 mx-2">
        {arr.slice(0, itemsToShow).map((item, index) => (
          <div key={index} className="flex cursor-pointer bg-slate-500 h-60 rounded-lg overflow-hidden">
            <img src={food} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
      {itemsToShow <= 10 && (
        <span
          onClick={showmore}
          className="self-end capitalize cursor-pointer hover:bg-slate-100 rounded p-2 my-8"
        >
          show more
        </span>
      )}

      <p className="pt-8 pb-4 text-lg font-semibold">Videos</p>
      
      {/* Add video here */}
      <div className="flex bg-slate-100 aspect-video rounded-xl overflow-hidden">
      <video src={video} width="full" height="full" autoPlay={false} className="aspect-video" controls={true} />
      </div>
      {itemsToShow <= 10 && (
        <span
          onClick={showmore}
          className="self-end capitalize cursor-pointer hover:bg-slate-100 rounded p-2 my-8"
        >
          show more
        </span>
      )}
    </div>
  );
};

export default GallerySection;
