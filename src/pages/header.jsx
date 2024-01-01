import backg from "../assets/6.png";
import hover from "../assets/hover.png";
import {Link} from "react-router-dom"

const Header = () => {
  {
    /* <img src={logo} alt="" className=" h-32" /> */
    {
      /* //Food delivery from Riihimäki’s best restaurants //ALL CITIES IN
              algeria WHERE YOU CAN ORDER FOOD ONLINE */
    }
  }

  return (
    <div className=" flex flex-col h-screen">
      <div className=" relative  h-screen ">
        <img
          src={backg}
          alt=""
          className=" absolute right-1 w-full h-[600px]"
        />
        <div className=" absolute">
          {/* <img
            src={hover}
            alt=""
            className=" relative left-0 h-[100px] w-[450px] top-48"
          /> */}
          <span className=" relative left-10 top-[150px] font-bold text-3xl text-black ">
            Good Food choices are good investments.
          </span>
        </div>
        <div className="flex flex-col">
          <div className=" flex   w-96 gap-4 absolute left-16 top-[450px]">
            <button className=" btn text-xl btn-outline text-red-700  hover:font-bold hover:text-xl hover:bg-red-700 left-8 top-96">
              <Link to="/Menu"> Order now</Link>
            </button>
            <button className=" btn btn-error text-lg   hover:font-extrabold hover:bg-red-800  left-32 top-96 ">
              Learn more
            </button>
          </div>

          <p className=" h-full m-full absolute left-16 top-[550px] text-white text-center text-2xl font-bold ">
            A progression of rare and beautiful ingredients where texture .
            flavour and harmony is paramount.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Header;