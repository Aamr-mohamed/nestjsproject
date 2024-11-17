import Breadcrumbs from "../Breadcrumbs/breadcrumb";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import profilePic from "../../images/profilePic.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light w-full p-4">
      <div className="w-full flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <h3 className="text-2xl font-bold">John Smith Profile</h3>
          <Breadcrumbs />
        </div>

        <div className="flex gap-4 items-center">
          <button className="hidden sm:block">
            <NotificationsNoneOutlinedIcon fontSize="medium" />
          </button>

          <button className="hidden sm:block">
            <MailOutlineIcon fontSize="medium" />
          </button>

          <button className="hidden sm:block">
            <SettingsOutlinedIcon fontSize="medium" />
          </button>

          <button>
            <img
              src={profilePic}
              alt="John Smith"
              className="w-10 h-10 rounded-full"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
