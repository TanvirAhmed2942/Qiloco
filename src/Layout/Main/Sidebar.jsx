// import { Menu } from "antd";
// import React, { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// import { TbBellBolt, TbDashboard } from "react-icons/tb";
// import { RxDashboard } from "react-icons/rx";
// import { PiWallet } from "react-icons/pi";
// import { FiLogOut, FiUsers } from "react-icons/fi";
// // import { FaHandsHelping, FaDiagramProject } from "react-icons/fa6";
// import { CgTemplate } from "react-icons/cg";
// import { RiSettings5Line } from "react-icons/ri";

// const Sidebar = ({ isCollapsed }) => {
//   const location = useLocation();
//   const path = location.pathname;
//   const [selectedKey, setSelectedKey] = useState("");
//   const [openKeys, setOpenKeys] = useState([]);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/auth/login");
//   };

//   const menuItems = [
//     {
//       key: "/",
//       icon: <RxDashboard size={24} />,
//       label: <Link to="/">Overview</Link>,
//     },
//     // {
//     //   key: "/serviceproviders",
//     //   icon: <FaHandsHelping size={24} />,
//     //   label: <Link to="/serviceproviders">Service Provider</Link>,
//     // },
//     {
//       key: "/transaction",
//       icon: <PiWallet size={25} />,
//       label: <Link to="/transaction">Transaction</Link>,
//     },
//     {
//       key: "/customer",
//       icon: <FiUsers size={23} />,
//       label: <Link to="/customer">Customer</Link>,
//     },
//     {
//       key: "/pushnotification",
//       icon: <TbBellBolt size={24} />,
//       label: <Link to="/pushnotification">PushNotification</Link>,
//     },
//     // {
//     //   key: "/setting",
//     //   icon: <RiSettings5Line size={24} />,
//     //   label: <Link to="/setting">Setting</Link>,
//     // },
//     {
//       key: "subMenuSetting1",
//       icon: <RiSettings5Line size={23} />,
//       label: "Project",
//       children: [
//         {
//           key: "/newrequest",
//           label: (
//             <Link to="/newrequest" className="text-white">
//               New Request
//             </Link>
//           ),
//         },
//         {
//           key: "/activeproject",
//           label: (
//             <Link to="/activeproject" className="text-white hover:text-white">
//               Active Project
//             </Link>
//           ),
//         },
//         {
//           key: "/pendingproject",
//           label: (
//             <Link to="/pendingproject" className="text-white hover:text-white">
//               Pending Project
//             </Link>
//           ),
//         },
//       ],
//     },
//     {
//       key: "/logout",
//       icon: <FiLogOut size={24} />,
//       label: (
//         <p onClick={handleLogout} className="text-white hover:text-white">
//           Logout
//         </p>
//       ),
//     },
//   ];

//   useEffect(() => {
//     setSelectedKey(path);
//   }, [path]);

//   return (
//     <div
//       className={`bg-quilocoP h-full shadow-md transition-all duration-300 ${
//         isCollapsed ? "w-[200px]" : "w-[280px]"
//       }`}
//     >
//       <Link to="/" className="flex items-center justify-center py-4 text-white">
//         <div className="w-full flex items-center justify-center bg-quilocoP border border-gtdandy px-4 py-3 gap-3 rounded-lg">
//           <TbDashboard size={30} className="text-white" />
//           {!isCollapsed && <p className="text-xl font-semibold">Dashboard</p>}
//         </div>
//       </Link>

//       <Menu
//         mode="inline"
//         selectedKeys={[selectedKey]}
//         style={{ background: "#232323" }}
//         items={menuItems.map((item) => ({
//           ...item,
//           label: isCollapsed ? <span>{item.icon}</span> : item.label,
//         }))}
//         className="text-white mt-10"
//       />
//     </div>
//   );
// };

// export default Sidebar;

import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { TbBellBolt, TbDashboard, TbListDetails } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";
import { PiWallet } from "react-icons/pi";
import { FiLogOut, FiUsers } from "react-icons/fi";
import { RiMoneyDollarCircleLine, RiSettings5Line } from "react-icons/ri";
import qilocoLogo from "../../assets/quiloco/qilocoLogo.png";
import { LuBoxes } from "react-icons/lu";

const Sidebar = ({ isCollapsed }) => {
  const location = useLocation();
  const path = location.pathname;
  const [selectedKey, setSelectedKey] = useState("");
  const [openKeys, setOpenKeys] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth/login");
  };

  const menuItems = [
    {
      key: "/",
      icon: <RxDashboard size={24} />,
      label: isCollapsed ? (
        <Link to="/">Overview</Link>
      ) : (
        <Link to="/">Overview</Link>
      ),
    },
    {
      key: "/products",
      icon: <LuBoxes size={25} />,
      label: isCollapsed ? (
        <Link to="/products"></Link>
      ) : (
        <Link to="/products">Products</Link>
      ),
    },
    {
      key: "/orderdetails",
      icon: <TbListDetails size={25} />,
      label: isCollapsed ? (
        <Link to="/orderdetails">Order Details</Link>
      ) : (
        <Link to="/orderdetails">Order Details</Link>
      ),
    },
    {
      key: "/earnings",
      icon: <RiMoneyDollarCircleLine size={25} />,
      label: isCollapsed ? (
        <Link to="/earnings">Earnings</Link>
      ) : (
        <Link to="/earnings">Earnings</Link>
      ),
    },
    // {
    //   key: "/pushnotification",
    //   icon: <TbBellBolt size={24} />,
    //   label: isCollapsed ? null : (
    //     <Link to="/pushnotification">PushNotification</Link>
    //   ),
    // },
    {
      key: "subMenuSetting1",
      icon: <RiSettings5Line size={23} />,
      label: isCollapsed ? null : "Settings",
      children: isCollapsed
        ? []
        : [
            {
              key: "/returnpolicy",
              label: (
                <Link to="/returnpolicy" className="text-white">
                  Return Policy
                </Link>
              ),
            },
            {
              key: "/privacypolicy",
              label: (
                <Link to="/privacypolicy" className="text-white">
                  Privacy Policy
                </Link>
              ),
            },
          ],
    },
    {
      key: "/logout",
      icon: <FiLogOut size={24} />,
      label: isCollapsed ? null : (
        <p onClick={handleLogout} className="text-white hover:text-white">
          Logout
        </p>
      ),
    },
  ];

  useEffect(() => {
    setSelectedKey(path);
  }, [path]);

  return (
    <div
      className={`bg-quilocoP h-full shadow-md transition-all duration-300 ${
        isCollapsed ? "w-[80px]" : "w-[280px]"
      }`}
    >
      <Link to="/" className="flex items-center justify-center py-4 text-white">
        <div className="w-full flex items-center justify-center bg-quilocoP px-4 py-3 gap-3 rounded-lg">
          {/* <TbDashboard size={30} className="text-white" />
          {!isCollapsed && <p className="text-xl font-semibold">Dashboard</p>} */}
          <img src={qilocoLogo} />
        </div>
      </Link>

      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        style={{ background: "#232323" }}
        items={menuItems}
        className="text-white mt-10"
      />
    </div>
  );
};

export default Sidebar;
