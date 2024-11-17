import React from "react";
import logo from "../../images/icon.png";
import GridViewIcon from "@mui/icons-material/GridView";
import PieChartIcon from "@mui/icons-material/PieChart";
import DescriptionIcon from "@mui/icons-material/Description";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import InboxIcon from "@mui/icons-material/Inbox";

export default function Sidebar() {
  return (
    <div className="p-6 flex flex-col gap-4 bg-[#FFFFFF] border-r-2 border-[#E7EAEE] min-h-screen">
      <div className="sidebar-header">
        <img src={logo} alt="Logo" className="h-12 w-12" />
      </div>
      <div className="sidebar-item">
        <button>
          <GridViewIcon
            fontSize="large"
            className="bg-[#003FAD] text-white p-1 rounded-md"
          />
        </button>
      </div>
      <div className="sidebar-item">
        <button>
          <PieChartIcon fontSize="large" />
        </button>
      </div>
      <div className="sidebar-item">
        <button>
          <DescriptionIcon fontSize="large" />
        </button>
      </div>
      <div className="sidebar-item">
        <button>
          <SupervisorAccountIcon fontSize="large" />
        </button>
      </div>

      <div className="sidebar-item">
        <button>
          <InboxIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
}
