import { IoArrowUpCircleSharp } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Dash = () => {
  return (
    <div>
      <div className="  flex justify-between mb-5">
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
    {/* nav */}

      <div className="flex flex-row   gap-10">
        <div className="w-[280px] max-h-[400px] border rounded-lg p-[20px]">
          <div>
            <p className="text-1xl mb-5">Your points</p>
          </div>
          <div className="flex flex-row gap-[4%] items-center ">
            <div>
              <img src="/public/Rectangle 116.png" alt="" />
            </div>
            <div>
              <h1 className="text-2xl">6675</h1>
            </div>
          </div>
          <div className="max-w-[388px] my-[20px] ">
            <div className="flex flex-row justify-between mb-2 ">
              <div>
                <p>Completed a Courses</p>
              </div>
              <div className="flex flex-row gap-[10px]">
                <img src="/public/Rectangle 118.png" alt="" />
                <p>10</p>
              </div>
            </div>
            <div className="flex flex-row justify-between mb-2 ">
              <div>
                <p>Completed a Task</p>
              </div>
              <div className="flex flex-row gap-[10px]">
                <img src="/public/Rectangle 118.png" alt="" />
                <p>20</p>
              </div>
            </div>
            <div className="flex flex-row  justify-between mb-2">
              <div>
                <p>Started new course</p>
              </div>
              <div className="flex flex-row gap-[10px]">
                <img src="/public/Rectangle 118.png" alt="" />
                <p>15</p>
              </div>
            </div>
            <div className="flex flex-row  justify-between mb-2">
              <div>
                <p>Completed a Courses</p>
              </div>
              <div className="flex flex-row gap-[10px]">
                <img src="/public/Rectangle 118.png" alt="" />
                <p>10</p>
              </div>
            </div>
          </div>
          <div className="text-center w-1/2 mx-auto ">
            <p className="text-[20px] rounded-2xl border">View all</p>
          </div>
        </div>
        <div className="w-[350px] max-h-[400px] flex flex-col justify-between border rounded-lg p-[20px]">
          <div className="flex flex-row gap-[3%] items-center">
            <p className="text-2xl">My Tasks</p>
            <p>(02/10)</p>
          </div>

          <div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-2">
                <p>01</p>
                <p>Create wireframes</p>
              </div>
              <div>
                <img src="/public/undone.png" alt="" />
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-2">
                <p>02</p>
                <p>Users flows </p>
              </div>
              <div>
                <img src="/public/undone.png" alt="" />
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-2">
                <p>03</p>
                <p>empathy mapping</p>
              </div>
              <div>
                <img src="/public/undone.png" alt="" />
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-2">
                <p>04</p>
                <p>Dashboard Design</p>
              </div>
              <div>
                <img src="/public/noun-done.png" alt="" />
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-2">
                <p>05</p>
                <p>Card sorting</p>
              </div>
              <div>
                <img src="/public/noun-done.png" alt="" />
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-2">
                <p>06</p>
                <p>User research</p>
              </div>
              <div>
                <img src="/public/undone.png" alt="" />
              </div>
            </div>
          </div>

          <div className="text-center w-1/2 mx-auto ">
            <p className="text-[20px] rounded-2xl border">View all</p>
          </div>
        </div>
        <div className=" w-[20rem] max-h-[400px] border rounded-lg p-[20px]">
          <div >
            <p>Courses in Progress</p>
          </div>

          <div className="flex flex-col justify-between ">
            <div className="py-[10px]">
              <div className="flex justify-between mb-2">
                <div className="flex gap-2">
                  <img src="/public/UX.png" alt="" />
                  <p>UX Design</p>
                </div>
                <div>
                  <p>48%</p>
                </div>
              </div>

              <div className="w-[201.6px] h-[9.6px] bg-[#353535] rounded flex">
                <div className="rounded-full w-[48.12%] bg-gradient-to-b from-[#FB03F5] to-[#AA9CFF]"></div>
                <div className="rounded-full w-[51.85%]  bg-[#353535]  "></div>
              </div>
            </div>

            <div className="py-[1rem] ">
              <div className="flex justify-between mb-2">
                <div className="flex gap-2">
                  <img src="/public/Visual.png" alt="" />
                  <p>Visual Design</p>
                </div>
                <div>
                  <p>97%</p>
                </div>
              </div>
              <div className="w-[201.6px] h-[9.6px] bg-[#353535] rounded flex">
                <div className=" rounded-full w-[14.2864rem] bg-gradient-to-b from-[#FB03F5] to-[#AA9CFF] "></div>
                <div className=" rounded-full w-[10.72%] bg-[#353535] "></div>
              </div>
            </div>
            <div className="py-[1rem]">
              <div className="flex justify-between mb-2">
                <div className="flex gap-2">
                  <img src="/public/management.png" alt="" />
                  <p>Management</p>
                </div>
                <div>
                  <p>20%</p>
                </div>
              </div>

              <div className="w-[201.6px] h-[9.6px] bg-[#353535] rounded flex">
                <div className=" rounded-full w-[19.34%] bg-gradient-to-b from-[#FB03F5] to-[#AA9CFF] "></div>
                <div className=" rounded-full w-[80.63%] bg-[#353535] "></div>
              </div>
            </div>
          </div>
          <div className="text-center w-1/2 mx-auto pt-8 ">
            <p className="text-[20px] rounded-2xl border">View all</p>
          </div>
        </div>
      </div>

      <div>
        <div className="my-2">
          <p>Leaderboard</p>
        </div>

       <div className="flex flex-row justify-around ">
         <div className="flex  flex-col justify-evenly w-fit ">

            <div className=" flex flex-row justify-between px-3  items-center w-[50rem] max-h-[5.5rem]  border-2  rounded-lg">
            <div >
              <p>01</p>
              <img  src="/public/Polygon 1.png" alt="" />
            </div>
            <div>
              <img className="w-[3rem]" src="/public/shiva kumar.png" alt="" />
            </div>
            <div>
              <p>ShivaKumar</p>
            </div>
            <div className="flex flex-row items-center">
              <img className="w-[0.7rem] h-[0.7rem]" src="/public/Rectangle 116.png" alt="" />
              <p>29234</p>
            </div>
            <div>
              <img src="/public/Level67.png" alt="" />
            </div>
            <div className=" h-[32px]">
              <button className="#FFFFFF2B text-[15px] rounded-2xl border px-8  ">View</button>
            </div>
          </div>
          <div className=" flex flex-row justify-between items-center px-3  w-[50rem] max-h-[5.5rem] border-2 rounded-lg">
            <div >
              <p>02</p>
              <img  src="/public/Polygon down.png" alt="" />
            </div>
            <div>
              <img className="w-[3rem]" src="/public/keertika.png" alt="" />
            </div>
            <div>
              <p>Keerthika</p>
            </div>
            <div className="flex flex-row items-center">
              <img className="w-[0.7rem] h-[0.7rem] " src="/public/Rectangle 116.png" alt="" />
              <p>19743</p>
            </div>
            <div>
              <img src="/public/Level67.png" alt="" />
            </div>
            <div className=" h-[32px] text-left">
              <button className="#FFFFFF2B text-[15px] rounded-2xl border px-8  ">View</button>
            </div>
          </div>
          <div className=" flex flex-row justify-between items-center w-[50rem] px-3 max-h-[5.5rem] border-2 rounded-lg bg-black/30">
            <div className="">
              <p>03</p>
              <img  src="/public/Polygon 1.png" alt="" />
            </div>
            <div>
              <img className="w-[3rem]" src="/public/teeja sai.png" alt="" />
            </div>
            <div>
              <p>Teja Sai</p>
            </div>
            <div className="flex flex-row items-center">
              <img className="w-[0.7rem] h-[0.7rem] " src="/public/Rectangle 116.png" alt="" />
              <p>29234</p>
            </div>
            <div>
              <img src="/public/Default.png" alt="" />
            </div>
            <div className=" h-[32px] text-left">
              <button className="#FFFFFF2B text-[15px] rounded-2xl border px-8  ">View</button>
            </div>
          </div>

        </div>
       <div className="relative">
  <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
    <button className=" text-[12px] border-2 border-black rounded-md text-black">Customize Me</button>
  </div>
  <div>
    <img className="w-[20rem]" src="/public/customize.png" alt="" />
  </div>
</div>

       </div>
      </div>
    </div>
  );
};

export default Dash;
