import { useDispatch, useSelector } from "react-redux";
import frame7 from "../../assets/Frame 7.png";
import frame8 from "../../assets/Frame 8.png";
import frame9 from "../../assets/Frame 9.png";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { addToCart, removeFromCart } from "../../redux/userSlices/cartSlice";

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
];
const Products = () => {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  console.log(cart.length, "???");
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleRemoveToCart = (product) => {
    console.log(product);
    dispatch(removeFromCart(product));
  };
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto py-10 grid md:grid-cols-4  grid-cols-1 gap-8 pt-20">
        {data.map((item, i) => (
          <div
            key={i}
            className="flex flex-col md:justify-start justify-center "
          >
            <img src={item.img} alt="" />
            <div className="flex md:justify-between md:mx-0 sm:mx-20 gap-4 justify-center pt-5">
              <div>
                <h1 className="text-lg font-medi text-black">{item.title}</h1>
                <p className="text-sm text-gray-500">{item.price}</p>
              </div>
              <div className="flex flex-row gap-2">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-primary hover:bg-primary/80 flex justify-center items-center text-black p-2 rounded-md text-md"
                >
                  Add to card
                  {/* <FaArrowRightLong className="mx-2" /> */}
                </button>
                <button
                  onClick={() => handleRemoveToCart(item.path)}
                  className="bg-primary hover:bg-primary/80 flex justify-center items-center text-black p-2 rounded-md text-md"
                >
                  remove to card
                  {/* <FaArrowRightLong className="mx-2" /> */}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1>{products}</h1>
      <Footer />
    </>
  );
};

export default Products;
