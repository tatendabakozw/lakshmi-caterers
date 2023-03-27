import SectionsHeading from "@components/sections-heading/SectionsHeading";

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
            Shree Laxmi Caterers, we are there in the Catering service
              Industry since 2007. As we grow, we never forget where we came
              from and what we are trying to achieve. Our loyal customers are
              big part of our success that helped us at every step of our
              journey by providing us continuous feedback. We will do whatever
              our customer demands to improve our services. We have remained
              true to our roots of promising to serve best quality food with the
              good taste. We have a Passion to succeed and earn respect in the
              industry. We do not believe in making false claims instead we
              offer honest advice, excellent taste at best prices. It has been
              our policy to treat every client with utmost integrity and the
              highest degree of professionalism.
              <br />
              <br />
              We are the best caterers service to supply quality, quantity food
              to all our customers. We will fulfill the desires of the customers
              in giving good quality, tasty food at the reasonable rates. We
              always give happiness and satisfaction to them. We pride ourselves
              on our excellent product range and efficient delivery of quality,
              hygienic food to our customers. We assure that the food make you
              mouth watery and get addicted to our food.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
