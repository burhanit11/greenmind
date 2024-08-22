import { FaArrowRightLong } from "react-icons/fa6";
import frame7 from "../../assets/Frame 7.png";
import frame8 from "../../assets/Frame 8.png";
import frame9 from "../../assets/Frame 9.png";

const data = [
  {
    title: "Natural Plants",
    img: frame7,
    price: "130$",
  },
  {
    title: "Natural Plants",
    img: frame8,
    price: "130$",
  },
  {
    title: "Natural Plants",
    img: frame9,
    price: "130$",
  },
];

const PlantCard = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 grid md:grid-cols-4  grid-cols-1 gap-8">
      <div className="sm:pt-10  md:mx-0 mx-5">
        <h1 className="text-xl font-extrabold tracking-tight text-black md:text-2xl lg:text-4xl">
          Best Selling Plants
        </h1>
        <p className="text-gray-500 py-5">
          Easiest way to healthy life by buying your favorite plants
        </p>
        <button className="bg-primary flex justify-center items-center text-black p-5 rounded-md text-md">
          See More <FaArrowRightLong className="mx-2" />
        </button>
      </div>
      {data.map((item, i) => (
        <div key={i} className="flex flex-col md:justify-start justify-center ">
          <img src={item.img} alt="" />
          <div className="flex md:justify-between md:mx-0 sm:mx-20 gap-4 justify-center pt-5">
            <div>
              <h1 className="text-lg font-medi text-black">{item.title}</h1>
              <p className="text-sm text-gray-500">{item.price}</p>
            </div>
            <div>
              <button className="bg-primary hover:bg-primary/80 flex justify-center items-center text-black p-2 rounded-md text-md">
                Add to card
                {/* <FaArrowRightLong className="mx-2" /> */}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlantCard;
