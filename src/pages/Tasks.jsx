import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { IoArrowUpCircleSharp } from "react-icons/io5";

const Tasks = () => {
  const [active, setActive] = useState("Inprogress");
  return (
    <div>
      <div className="  flex justify-between mb-2">
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

      {/* ----------------------------------------------------- */}
      <div className="flex justify-between">
        <div className="w-[320px] bg-[#1c1c1c]/50 p-[20px] my-5 rounded-lg">
          <div className="flex justify-between">
            <div>
              <p>Inprogress </p>
            </div>
            <div>
              <img src="/public/trade.png" alt="" />
            </div>
          </div>
          <div className="flex justify-between space-x-2">
            <div>
              <h1>
                <span className="text-[40px] ">10 </span> on going
              </h1>
            </div>
          </div>
        </div>

        <div className="w-[320px] bg-[#1c1c1c]/50 p-[20px] my-5 rounded-lg">
          <div className="flex justify-between">
            <div>
              <p>New Assigned </p>
            </div>
            <div>
              <img src="/public/New assign.png" alt="" />
            </div>
          </div>
          <div className="flex justify-between space-x-2">
            <div>
              <h1>
                <span className="text-[40px] ">12</span> Yesterday
              </h1>
            </div>
          </div>
        </div>

        <div className="w-[320px] bg-[#1c1c1c]/50 p-[20px] my-5 rounded-lg">
          <div className="flex justify-between">
            <div>
              <p>Completed </p>
            </div>
            <div>
              <img src="/public/gg_sand-clock.png" alt="" />
            </div>
          </div>
          <div className="flex justify-between space-x-2">
            <div>
              <h1>
                <span className="text-[40px] ">12</span> Yesterday
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <h1>My tasks</h1>
        <p>14</p>
      </div>
      <div className="flex justify-between border-b-[2px] h-[40px] border-black/40 ">
        <div className="flex gap-10">
          <div
            className={`${
              active === "Inprogress"
                ? "border-b-[3px] border-purple-300 text-white"
                : "text-white/50 border-none"
            }`}
            onClick={() => setActive("Inprogress")}
          >
            <h1>In progress</h1>
          </div>

          <div className={`${
              active === "New Assigned"
                ? "border-b-[3px] border-purple-300 text-white"
                : "text-white/50 border-none"
            }`}
            onClick={() => setActive("New Assigned")} >
            <h1>New Assigned</h1>
          </div>
          <div className={`${
              active === "Completed"
                ? "border-b-[3px] border-purple-300 text-white"
                : "text-white/50 border-none"
            }`}
            onClick={() => setActive("Completed")}>
            <h1>Completed</h1>
          </div>
        </div>

        <div className={`${
              active === "View All"
                ? "border-b-[3px] border-purple-300 text-white"
                : "text-white/50 border-none"
            }`}
            onClick={() => setActive("View All")}>
          <h1>View All</h1>
        </div>
      </div>

      {/* <div className="my-5 w-[1185px] h-[2px] bg-[#353535]">
        <div className=" w-[20%] bg-gradient-to-r from-[#FB03F5] to-[#AA9CFF]"></div>
        <div className="w-[80%]  bg-[#353535]  "></div>
      </div> */}
      <div className="flex items-center justify-around my-2 py-3 bg-[#1C1C1CFF]  rounded-lg ">
        <div>
          <img src="/public/create wireframes.png" alt="" />
        </div>

        <div className="mr-[10rem] w-[15%] ">
          <div>Create Wireframes</div>
          <div className="flex gap-3">
            <div>
              <p>Assign</p>
            </div>
            <div className="flex">
              <img src="/public/suma.png" alt="" />
              <p>Suma</p>
            </div>
          </div>
        </div>

        <div className="pr-[100px]">
          <p>Estimation</p>
          <h1 className="text-center">2 days</h1>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <h1>48%</h1>
          </div>
          <div className="w-[201.6px] h-[9.6px] bg-[#353535] rounded flex">
            <div className="rounded-full w-[48.12%] bg-gradient-to-r from-[#FB03F5] to-[#AA9CFF]"></div>
            <div className="rounded-full w-[51.85%]  bg-[#353535]  "></div>
          </div>
        </div>

        <div>
          <div className=" h-[32px] text-left ">
            <button className=" bg-[#353535]  #FFFFFF2B text-[15px] rounded-2xl border px-8  ">
              View
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around my-2 py-3 bg-[#1C1C1CFF]  rounded-lg ">
        <div>
          <img src="/public/UserFlow.png" alt="" />
        </div>

        <div className="mr-[10rem] w-[15%]">
          <div>User Flows</div>
          <div className="flex gap-3">
            <div>
              <p>Mentor</p>
            </div>
            <div className="flex">
              <img src="/public/farah.png" alt="" />
              <p>Farah</p>
            </div>
          </div>
        </div>

        <div className="pr-[100px]">
          <p>Estimation</p>
          <h1 className="text-center">2 days</h1>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <h1>95%</h1>
          </div>
          <div className="w-[201.6px] h-[9.6px] bg-[#353535] rounded flex">
            <div className="rounded-full w-[95%] bg-gradient-to-r from-[#FB03F5] to-[#AA9CFF]"></div>
            {/* <div className="rounded-full w-[51.85%]  bg-[#353535]  "></div> */}
          </div>
        </div>

        <div>
          <div className=" h-[32px] text-left ">
            <button className=" bg-[#353535]  #FFFFFF2B text-[15px] rounded-2xl border px-8  ">
              View
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around my-2 py-3 bg-[#1C1C1CFF]  rounded-lg ">
        <div>
          <img src="/public/Empathy mapping.png" alt="" />
        </div>

        <div className="mr-[10rem] w-[15%]">
          <div>Empathy Mapping</div>
          <div className="flex gap-3">
            <div>
              <p>Mentor</p>
            </div>
            <div className="flex">
              <img src="/public/Rajina.png" alt="" />
              <p>Rejini</p>
            </div>
          </div>
        </div>

        <div className="pr-[100px]">
          <p>Estimation</p>
          <h1 className="text-center">1 days</h1>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <h1>100%</h1>
          </div>
          <div className="w-[201.6px] h-[9.6px] bg-[#353535] rounded flex">
            <div className="rounded-full w-[100%] bg-gradient-to-r from-[#FB03F5] to-[#AA9CFF]"></div>
            {/* <div className="rounded-full w-[51.85%]  bg-[#353535]  "></div> */}
          </div>
        </div>

        <div>
          <div className=" h-[32px] text-left ">
            <button className=" bg-[#353535]  #FFFFFF2B text-[15px] rounded-2xl border px-8  ">
              View
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around my-2 py-3 bg-[#1C1C1CFF]  rounded-lg ">
        <div>
          <img src="/public/cardsorting.png" alt="" />
        </div>

        <div className="mr-[10rem] w-[15%]">
          <div>Card Sorting</div>
          <div className="flex gap-3">
            <div>
              <p>Mentor</p>
            </div>
            <div className="flex">
              <img src="/public/mani kumar.png" alt="" />
              <p>Mani Kumar</p>
            </div>
          </div>
        </div>

        <div className="pr-[100px]">
          <p>Estimation</p>
          <h1 className="text-center">3 days</h1>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <h1>09%</h1>
          </div>
          <div className="w-[201.6px] h-[9.6px] bg-[#353535] rounded flex">
            <div className="rounded-full w-[09%] bg-gradient-to-r from-[#FB03F5] to-[#AA9CFF]"></div>
            <div className="rounded-full w-[91%]  bg-[#353535]  "></div>
          </div>
        </div>

        <div>
          <div className=" h-[32px] text-left ">
            <button className=" bg-[#353535]  #FFFFFF2B text-[15px] rounded-2xl border px-8  ">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
