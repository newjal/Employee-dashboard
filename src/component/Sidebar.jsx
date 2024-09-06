import { MdSpaceDashboard } from "react-icons/md";
import { SiSololearn } from "react-icons/si";
import { GrTasks } from "react-icons/gr";
import { FaTeamspeak } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState('Dashboard')
  
  return (
    <div className="w-[220px] h-[90vh] bg-slate-600/10 rounded-[20px] m-[25px] text-center  ">
      <div className="flex flex-col p-[20px] justify-between h-[100%]">
        <div className="flex flex-col gap-[40px]">
          <div className="flex flex-start font-bold">
            <h1 className="pl-[15px] pt-[5px]">TECHNOVERT</h1>
          </div>
          <div className="flex flex-col">
            <Link
              to={"/"}
              className={ `flex items-center gap-[4%] text-[18px] p-[15px]  ${
                active === 'Dashboard'? 'bg-red-600 rounded-2xl' : 'text-white '
              }` }  
              onClick={() =>setActive('Dashboard')}
            >
              <MdSpaceDashboard />
              <h3>Dashboard</h3>
            </Link>
            <Link
              to={"/learn"}
              className={ `flex items-center gap-[4%] text-[18px] p-[15px]  ${
                active === 'Learn'? 'bg-red-600 rounded-2xl' : 'text-white '
              }` }  
              
              onClick={() =>setActive('Learn')}
            >
              <SiSololearn />
              <h3>Learn</h3>
            </Link>
            <Link
              to={"/tasks"}
              className={ `flex items-center gap-[4%] text-[18px] p-[15px]  ${
                active === 'Tasks'? 'bg-red-600 rounded-2xl' : 'text-white '
              }` }  
               onClick={() =>setActive('Tasks')}
            >
              <GrTasks />
              <h3>Tasks</h3>
            </Link>

            <Link to={"/team"}

              className={ `flex items-center gap-[4%] text-[18px] p-[15px]  ${
                active === 'Teams'? 'bg-red-600 rounded-2xl' : 'text-white '
              }` } 
              onClick={() =>setActive('Teams')}
              >
              <FaTeamspeak />
              <h3>Teams</h3>
            </Link>
            
            <Link to={'/award'} className={ `flex items-center gap-[4%] text-[18px] p-[15px]  ${
                active === 'Awards'? 'bg-red-600 rounded-2xl' : 'text-white '
              }` }  onClick={() =>setActive('Awards')}  >
              <FaAward />
              <h3>Awards</h3>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-[4%] text-[18px] p-[15px] hover:bg-red-600 rounded-2xl">
          <IoMdLogOut />
          <h3>Log Out </h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
