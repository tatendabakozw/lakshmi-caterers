import React from "react";

type Props = {
    firstLetter: string,
    otherLetters: string
};

const SectionsHeading = (props: Props) => {
  return (
    <p className="text-4xl font-semibold text-slate-800">
      <span className="underline underline-offset-2 decoration-green-light  decoration-4">
        {props.firstLetter}
      </span>
      {props.otherLetters}
    </p>
  );
};

export default SectionsHeading;
