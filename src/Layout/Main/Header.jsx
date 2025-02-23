import React from "react";
import { Link } from "react-router-dom";
import { FaRegBell } from "react-icons/fa6";
import { Badge, Avatar } from "antd";
import { useUser } from "../../provider/User";
import { CgMenu } from "react-icons/cg";

const Header = ({ toggleSidebar }) => {
  const { user } = useUser();
  const src = user?.image?.startsWith("https")
    ? user?.image
    : `https://your-image-source/${user?.image}`;

  return (
    <div className="bg-[#232323] h-[80px] flex items-center px-6 shadow-md transition-all duration-300">
      {/* Sidebar Toggle Button */}
      <CgMenu
        size={40}
        onClick={toggleSidebar}
        className="cursor-pointer text-white"
      />

      <h1 className="text-2xl text-white ml-4">Dashboard</h1>

      <div className="flex items-center gap-6 ml-auto">
        {/* Notifications */}
        <Link to="/notification" className="relative">
          <FaRegBell size={24} color="white" />
          <Badge
            count={10}
            overflowCount={5}
            size="small"
            className="absolute -top-2 -right-2"
          />
        </Link>

        {/* User Profile */}
        <Link to="/setting" className="flex items-center gap-2 text-white">
          <Avatar size={40} src={src} />
          <p>Super Admin</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
