import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { IoArrowUpCircleSharp } from "react-icons/io5";

const Learn = () => {
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

      <div className="relative flex-col  bg-[#1C1C1C]/60  rounded-lg w-[95%]  ">
        <div className="flex flex-col py-[30px] justify-between gap-[40px] pl-[30px] ">
          <div>
            <h1 className="text-[35px]">
              Hey <strong className="text-[#00A3FF]">Technoverts</strong>
            </h1>
          </div>
          <div>
            <p>Learn new skills from our online courses</p>
          </div>
          <div>
            <button className=" bg-gradient-to-r from-[#1F8EBE] via-[#440495] to-[#B102CD] border-black rounded px-10 py-2">
              Explore
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 right-[20%]">
          <img
            src="/public/manwithlaptop.png"
            className="w-[450px] h-auto"
            alt=""
          />
        </div>
        <div className="absolute right-[5%] top-[5%]">
          <img src="/public/T.png" alt="" />
        </div>
        <div className=" absolute bottom-5 right-[5%] flex gap-2 ">
          <div className="w-[29px] h-[5px] rounded-full bg-[#7d7575]"></div>
          <div className="w-[29px] h-[5px] rounded-full bg-[#baa1a1]"></div>
          <div className="w-[29px] h-[5px] rounded-full bg-[#FFFFFF]"></div>
        </div>
      </div>
      <div>
        <div className="flex justify-between w-[95%]">
          <div className="w-[350px] bg-[#1c1c1c]/50 p-[20px] my-5 rounded-lg">
            <div className="flex justify-between">
              <div>
                <p>Active Course </p>
              </div>
              <div>
                <img src="/public/trade.png" alt="" />
              </div>
            </div>
            <div className="flex justify-between space-x-2">
              <div>
                <h1>
                  <span className="text-[40px]">10</span>Course
                </h1>
              </div>
              <div className="flex items-center mt-5">
                <img src="/public/Rectangle 118.png" alt="" />
                <p>128</p>
              </div>
            </div>
          </div>
          <div className="w-[350px] bg-[#1c1c1c]/50 p-[20px] my-5 rounded-lg">
            <div className="flex justify-between">
              <div>
                <p>Coursera tokan </p>
              </div>
              <div>
                <img src="/public/protocols.png" alt="" />
              </div>
            </div>
            <div className="flex justify-between space-x-2">
              <div>
                <h1>
                  <span className="text-[40px]">42</span>Certificate
                </h1>
              </div>
              <div className="flex items-center mt-5">
                <img src="/public/Rectangle 118.png" alt="" />
                <p>544</p>
              </div>
            </div>
          </div>
          <div className="w-[350px] bg-[#1c1c1c]/50 p-[20px] my-5 rounded-lg">
            <div className="flex justify-between">
              <div>
                <p>Hours Spend </p>
              </div>
              <div>
                <img src="/public/gg_sand-clock.png" alt="" />
              </div>
            </div>
            <div className="flex justify-between space-x-2">
              <div>
                <h1>
                  <span className="text-[40px]">231</span>Hours
                </h1>
              </div>
              <div className="flex items-center mt-5">
                <img src="/public/Rectangle 118.png" alt="" />
                <p>342</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[95%]">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <h1 className="text-[20px]">Course you are taking </h1>
              <p className="font-extralight text-[#b9a4a4] ">14</p>
            </div>
            <div>
              <h1>View all</h1>
            </div>
          </div>
          <div className="flex items-center justify-around my-2 py-3 bg-[#1C1C1CFF]  rounded-lg ">
            <div>
              <img src="/public/coursera.png" alt="" />
            </div>

            <div className="w-[15%]">
              <div>UX DESIGN</div>
              <div className="flex gap-3">
                <div>
                  <p>Mentor</p>
                </div>
                <div className="flex">
                  <img src="/public/suma.png" alt="" />
                  <p>Suma</p>
                </div>
              </div>
            </div>

            <div>
              <p>Duration</p>
              <h1>24hr 13m</h1>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <h1>48%</h1>
              </div>
              <div className="w-[201.6px] h-[9.6px] bg-[#353535] rounded flex">
                <div className="rounded-full w-[48.12%] bg-gradient-to-r from-[#FB03F5] to-[#AA9CFF]"></div>
                <div className="rounded-full w-[51.85%]  bg-[#353535]  "></div>
              </div>
              <div>18/40</div>
            </div>

            <div>
              <div className=" h-[32px] text-left ">
                <button className=" bg-[#353535]  #FFFFFF2B text-[15px] rounded-2xl border px-8  ">
                  Continue
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-around my-2 py-3 bg-[#1C1C1CFF]  rounded-lg ">
            <div>
              <img src="/public/skill share.png" alt="" />
            </div>

            <div className="w-[15%]">
              <div>Sketch For Beginners</div>
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

            <div>
              <p>Duration</p>
              <h1>16hr 45m</h1>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <h1>100</h1>
              </div>
              <div className="w-[201.6px] h-[9.6px] bg-[#353535] rounded flex">
                <div className="rounded-full w-[100%] bg-gradient-to-r from-[#FB03F5] to-[#AA9CFF]"></div>
                {/* <div className="rounded-full w-[51.85%]  bg-[#353535]  "></div> */}
              </div>
              <div>18/40</div>
            </div>

            <div>
              <div className=" h-[32px] text-left ">
                <button className=" bg-[#353535]  #FFFFFF2B text-[15px] rounded-2xl border px-8  ">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
