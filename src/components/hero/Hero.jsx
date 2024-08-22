import { IoSearch } from "react-icons/io5";
import bgImg from "../../assets/greenmindbg.png";
import arrow186 from "../../assets/Vector_186.png";
import arrow187 from "../../assets/Vector_187.png";

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-12 bg-primary rounded-md my-2 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4  md:py-10 lg:col-span-7   xl:col-span-6">
          <h1 className="text-3xl font-extrabold tracking-tight text-black md:text-4xl lg:text-6xl">
            Buy your dream plants
          </h1>
          <div className="flex  items-center font-serif  justify-between text-start max-w-72 mt-16">
            <p className="text-2xl border-r-2 pr-3 border-gray-600 font-bold">
              50+ <br />{" "}
              <span className="text-md font-thin">Plant species</span>{" "}
            </p>
            <p className="text-2xl font-bold">
              100+ <br /> <span className="text-md font-medium">Customers</span>{" "}
            </p>
          </div>
          <form action="" className="mt-16 flex items-start space-x-2">
            <div className="flex w-full  rounded-md font-sans  border-black/30 bg-white px-3  py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
              <input
                className="border-none w-full text-lg   focus:outline-none placeholder:text-gray-600 bg-transparent"
                // type="email"
                placeholder="What are you look for ?"
                id="email"
              ></input>
              <span className="bg-primary rounded-md p-3">
                <IoSearch className="text-xl" />
              </span>
            </div>
          </form>
        </div>
        <div className="relative    lg:col-span-5 flex justify-end xl:col-span-6">
          <img
            src={arrow186}
            alt=""
            className="h-20 flex justify-center items-center mt-60"
          />
          <img
            className="h-[30rem] w-[30rem] mt-10 -mr-10 "
            src={bgImg}
            alt=""
          />
          <img src={arrow187} alt="" className="h-36 mt-10 relative" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
