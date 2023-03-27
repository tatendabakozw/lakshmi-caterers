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
              Welcome to our catering company, where we believe "The way to the
              Heart is through the stomach.". We are a team of induviduals
              passionate about cooking and our love for great food into a
              full-blown catering service. We aim to create a culinary
              experience that joyfully leaves your taste buds dancing.
              <br />
              <br />
              We understand that food is not just about nourishing the body but
              also about satisfying the soul. We use only the finest ingredients
              and recipes to create a mouth-watering dish that impresses and
              satisfies your guests.
              <br />
              <br />
              We take customer service seriously. We work jointly with our
              clients to understand their vision and preferences and tailor our
              menus to match. So whether you like spicy food or mild, veg or
              non-veg or maybe vegan, we have got everything your tastebuds
              demand. Our team is dedicated to providing extraordinary service
              that exceeds your expectations. Whether planning a corporate event
              or a wedding, we ensure that every detail is accounted for, so you
              can sit back and relax. We work endlessly to ensure that
              everything runs smoothly, so you can focus on enjoying your event.
              <br />
              <br />
              Our clients' positive testimonials and love bring us joy and
              motivate us to continue providing the best possible service for
              every event we cater. We are commit to making every event we cater
              a success.
              <br />
              <br />
              For us, the most rewarding part of our job is the satisfaction of
              our clients. We feel grateful to be a part of their special
              moments. Our team has years of experience creating and executing
              menus for events of all sizes and types. We offer competitive
              pricing for our catering services.
              <br />
              <br />
              With our experience, passion for service, commitment to quality
              ingredients, and competitive pricing, we are confident that we can
              exceed your expectations and help make your event a
              memorable success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
