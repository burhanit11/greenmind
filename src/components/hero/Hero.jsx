import { IoSearch } from "react-icons/io5";

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-12 bg-primary rounded-md my-2 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <h1 className=" text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Buy your dream plants
          </h1>
          <div className="flex items-center justify-between text-center max-w-60 mt-5">
            <p className="text-2xl font-bold">
              50+ <br />{" "}
              <span className="text-sm font-medium">Plant species</span>{" "}
            </p>
            <p className="text-2xl font-bold">
              100+ <br /> <span className="text-sm font-medium">Customers</span>{" "}
            </p>
          </div>
          <form action="" className="mt-8 flex items-start space-x-2">
            <div className="flex w-full  rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
              <input
                className="border-none w-full  focus:outline-none placeholder:text-gray-600 bg-transparent"
                type="email"
                placeholder="Enter your email"
                id="email"
              ></input>
              <IoSearch />
            </div>
          </form>
        </div>
        {/* <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
            src="https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
