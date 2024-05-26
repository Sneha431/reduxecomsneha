import { FaFacebook, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#2BC6D6] p-12">
      <div className=" max-w-[1240px] md:grid grid-cols-3 ">
        <div className="col-span-1 md:mx-20 md:w-full">
          <h1 className="text-4xl font-semibold">MySite</h1>
          <p className="text-white mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quo
            nisi nesciunt molestias tenetur, consectetur sequi suscipit
            asperiores hic a eum adipisci nihil beatae odit, magni quam
            consequatur minima. Dolores!
          </p>
          <div className="flex gap-16 py-8">
            <FaFacebookSquare className="text-white size-6" />
            <FaFacebookSquare className="text-white size-6" />
            <FaFacebookSquare className="text-white size-6" />
            <FaFacebookSquare className="text-white size-6" />
          </div>
        </div>
        <div className="col-span-2 flex flex-col md:flex-row space-y-5 md:justify-between md:ml-16 md:p-8 ">
          <div className="md:mt-5">
            <h2 className="font-medium text-md">Heading</h2>
            <div className="md:space-y-3">
              <ul className="text-white font-normal">
                <li>Contact Us</li>
                <li>Contact Us</li>
                <li>Contact Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="font-medium text-md">Heading</h2>
            <div className="space-y-3">
              <ul className="text-white font-normal">
                <li>Contact Us</li>
                <li>Contact Us</li>
                <li>Contact Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="font-medium text-md">Heading</h2>
            <div className="space-y-3">
              <ul className="text-white font-normal">
                <li>Contact Us</li>
                <li>Contact Us</li>
                <li>Contact Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="font-medium text-md">Heading</h2>
            <div className="space-y-3">
              <ul className="text-white font-normal">
                <li>Contact Us</li>
                <li>Contact Us</li>
                <li>Contact Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
