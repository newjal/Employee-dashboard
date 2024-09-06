import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { IoArrowUpCircleSharp } from "react-icons/io5";

const Award = () => {
  return (
    <div>
      <div className="  flex justify-between items-center mb-2">
        <div className="flex felx-row items-center gap-[15px]">
          <div>
            <p className="text-2xl">Welcome,Gaurab</p>
          </div>
          <div>
            <img src="/Ellipse 1.png" alt="" />
          </div>
          <div className="flex flex-row items-center bg-slate-900 rounded-[50px] px-[10px] py-[6px]">
            <IoArrowUpCircleSharp className="text-2xl" />
            <p>Level 12</p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-[10px] ">
          <div className="relative ">
            <div className="absolute left-0 top-3 text-[20px] pl-[5px] text-black">
              <CiSearch />
            </div>
            <input
              className="pl-[30px] py-2 rounded "
              type="text"
              placeholder="Search"
            />
          </div>
          <FaRegBell className="text-[25px]" />
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------------- */}

      <div className=" bg-[#FFFFFF24]/10 w-full flex items-center   gap-[10rem] rounded-[2rem] my-5 ">
        <div className=" ml-4">
          <img className="w-[18rem]" src="/public/award/boy.png" alt="" />
        </div>
        <div className="w-[50%]">
          <div className="flex items-start justify-between border-b-2 border-white/10 pb-5  ">
            <div>
              <h1>
                Nikhil Raj |{" "}
                <span className="text-white/30">UI/UX Designer</span>
              </h1>
              <h1 className="text-white/40 text-[20px]">Level 12</h1>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[1rem] h-auto ">
                <img src="/public/Rectangle 118.png" alt="" />
              </div>

              <h1>6,675</h1>
            </div>
          </div>

          <div className="flex  items-center justify-between p-2">
            <div className="w-[3rem] flex items-center gap-4">
              <img src="/public/award/sign.png" alt="" />
              <h1>12</h1>
            </div>
            <div className="w-[350px] h-[9.6px] bg-[#353535] rounded flex">
              <div className="rounded-full w-[60%] bg-gradient-to-r from-[#FB03F5] to-[#AA9CFF]"></div>
              <div className="rounded-full w-[40%]  bg-[#353535]  "></div>
            </div>

            <div>
              <h1>Level 13</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF24]/10 w-full    p-6 rounded-[2.5rem] items-center">
        <div className="flex justify-between mb-6">
          <h1 className="text-[20px]">Badges</h1>
          <h1 className="text-[20px]">View</h1>
        </div>

        <div className="flex justify-between items-center  ">
          <div>
            <img className="w-[7rem]" src="/public/award/rockiee.png" alt="" />
          </div>
          <div>
            <img
              className="w-[6rem]"
              src="/public/award/Helping hand.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[5.5rem]"
              src="/public/award/Fast Starter.png"
              alt=""
            />
          </div>
          <div>
            <img className="w-[6rem]" src="/public/award/SuperSq.png" alt="" />
          </div>
          <div>
            <img className="w-[6rem]" src="/public/award/APlpha.png" alt="" />
          </div>
          <div>
            
            <img
              className="w-[6rem]"
              src="/public/award/the insprier.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-[#BD00FF]/80 w-full  flex justify-between items-start p-6 rounded-[1rem] my-4  " >
        <div>
            <h1 className="text-[20px]">
                Top ways to earn rewards and points
            </h1>

        </div>
        <div className=" h-[30px] text-left ">
                <button className=" bg-[#BD00FF]  #FFFFFF2B text-[18px] rounded-2xl border px-8  ">
                  View
                </button>
              </div>
      </div>
    </div>
  );
};

export default Award;
