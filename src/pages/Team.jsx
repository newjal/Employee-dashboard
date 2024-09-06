import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { IoArrowUpCircleSharp } from "react-icons/io5";

const Team = () => {
  const [active, setActive] = useState("My Team");
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
      {/* -------------------------------------------------------------------- */}

      <div className="my-5">
        <h1>Leader boards</h1>
      </div>

      <div className="    flex justify-between">
        <div className="w-[22rem] flex flex-col gap-4  bg-[#1c1c1c]/50 p-[20px] my-5 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <p>01</p>
              <img src="/public/Polygon 1.png" alt="" />
            </div>
            <div>
              <img className="w-[3rem]" src="/public/shiva kumar.png" alt="" />
            </div>
            <div>
              <h1>SivaKumar</h1>
            </div>
            <div>
              <img className="w-[2rem]" src="/public/team/3 dots.png" alt="" />
            </div>
          </div>
          <div className="flex gap-6">
            <div>
              <img src="/public/Level67.png" alt="" />
            </div>
            <div className="flex items-center">
              <img src="/public/Rectangle 118.png" alt="" />
              <p>128</p>
            </div>
          </div>
        </div>
        <div className="w-[22rem] flex flex-col gap-4  bg-[#1c1c1c]/50 p-[20px] my-5 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <p>01</p>
              <img src="/public/Polygon 1.png" alt="" />
            </div>
            <div>
              <img className="w-[3rem]" src="/public/shiva kumar.png" alt="" />
            </div>
            <div>
              <h1>SivaKumar</h1>
            </div>
            <div>
              <img className="w-[2rem]" src="/public/team/3 dots.png" alt="" />
            </div>
          </div>
          <div className="flex gap-6">
            <div>
              <img src="/public/Level67.png" alt="" />
            </div>
            <div className="flex items-center">
              <img src="/public/Rectangle 118.png" alt="" />
              <p>128</p>
            </div>
          </div>
        </div>
        <div className="w-[22rem] flex flex-col gap-4  bg-[#1c1c1c]/50 p-[20px] my-5 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <p>01</p>
              <img src="/public/Polygon 1.png" alt="" />
            </div>
            <div>
              <img className="w-[3rem]" src="/public/shiva kumar.png" alt="" />
            </div>
            <div>
              <h1>SivaKumar</h1>
            </div>
            <div>
              <img className="w-[2rem]" src="/public/team/3 dots.png" alt="" />
            </div>
          </div>
          <div className="flex gap-6">
            <div>
              <img src="/public/Level67.png" alt="" />
            </div>
            <div className="flex items-center">
              <img src="/public/Rectangle 118.png" alt="" />
              <p>128</p>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------- */}

      <div className="text-[20px] text-white/50">Technoverts</div>
      <div className="flex justify-between h-[40px] border-b-[2px] border-black/40">
        <div className="flex gap-5 ">
          <div
            className={`${
              active === "My Team"
                ? "border-b-[3px] border-purple-300 text-white"
                : "text-white/50 border-none"
            }`}
            onClick={() => setActive("My Team")}
          >
            <h1>My Team</h1>
          </div>
          <div
            className={`${
              active === "Groups"
                ? "border-b-[3px] border-purple-300 text-white"
                : "text-white/50 border-none"
            }`}
            onClick={() => setActive("Groups")}
          >
            <h1>Groups</h1>
          </div>
          <div
            className={`${
              active === "All Units"
                ? "border-b-[3px] border-purple-300 text-white"
                : "text-white/50 border-none"
            }`}
            onClick={() => setActive("All Units")}
          >
            <h1>All Units</h1>
          </div>
        </div>
        <div
          className={`flex items-center ${
            active === "View all"
              ? "border-b-[3px] border-purple-300 text-white"
              : "text-white/50 border-none"
          }`}
          onClick={() => setActive("View all")}
        >
          <h1>View all</h1>
        </div>
      </div>
      <div>
        {/* {
            active ==='My Team'&&<>
            <div>Team</div>
            </>
        }

        {
            active ==='Groups'&&<>
            <div>Group</div>
            </>
        }
        {
            active ==='All Units'&&<>
            <div>All</div>
            </>
        }
        {
            active ==='View all'&&<>
            <div>View</div>
            </>
        } */}
      </div>
{/* ---------------------------------------------------------------------------- */}

      <div className="flex flex-col justify-between my-7 space-y-6">
        <div className=" flex flex-row justify-between px-3 bg-[#1c1c1c]/50 items-center py-5  border-2  rounded-lg">
          <div>
            <p>01</p>
            <img src="/public/Polygon 1.png" alt="" />
          </div>
          <div>
            <img className="w-[3rem]" src="/public/shiva kumar.png" alt="" />
          </div>
          <div>
            <p>ShivaKumar</p>
          </div>
          <div className="flex flex-row items-center">
            <img
              className="w-[0.7rem] h-[0.7rem]"
              src="/public/Rectangle 116.png"
              alt=""
            />
            <p>29234</p>
          </div>
          <div>
            <img src="/public/Level67.png" alt="" />
          </div>
          <div className=" h-[32px]">
            <button className="#FFFFFF2B text-[15px] rounded-2xl border px-8  ">
              View
            </button>
          </div>
        </div>
        <div className=" flex flex-row justify-between px-3 bg-[#1c1c1c]/50 items-center py-5  border-2  rounded-lg">
          <div>
            <p>01</p>
            <img src="/public/Polygon 1.png" alt="" />
          </div>
          <div>
            <img className="w-[3rem]" src="/public/shiva kumar.png" alt="" />
          </div>
          <div>
            <p>ShivaKumar</p>
          </div>
          <div className="flex flex-row items-center">
            <img
              className="w-[0.7rem] h-[0.7rem]"
              src="/public/Rectangle 116.png"
              alt=""
            />
            <p>29234</p>
          </div>
          <div>
            <img src="/public/Level67.png" alt="" />
          </div>
          <div className=" h-[32px]">
            <button className="#FFFFFF2B text-[15px] rounded-2xl border px-8  ">
              View
            </button>
          </div>
        </div>
        <div className=" flex flex-row justify-between px-3 bg-[#1c1c1c]/50 items-center py-5  border-2  rounded-lg">
          <div>
            <p>01</p>
            <img src="/public/Polygon 1.png" alt="" />
          </div>
          <div>
            <img className="w-[3rem]" src="/public/shiva kumar.png" alt="" />
          </div>
          <div>
            <p>ShivaKumar</p>
          </div>
          <div className="flex flex-row items-center">
            <img
              className="w-[0.7rem] h-[0.7rem]"
              src="/public/Rectangle 116.png"
              alt=""
            />
            <p>29234</p>
          </div>
          <div>
            <img src="/public/Level67.png" alt="" />
          </div>
          <div className=" h-[32px]">
            <button className="#FFFFFF2B text-[15px] rounded-2xl border px-8  ">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
