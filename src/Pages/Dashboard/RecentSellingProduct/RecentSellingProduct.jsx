// import React from "react";
// import GetPageName from "../../../components/common/GetPageName";
// import { Table, ConfigProvider, Avatar } from "antd";
// import { useGetRecentProductQuery } from "../../../redux/apiSlices/overViewSlice";
// import { IoEye } from "react-icons/io5";
// import productImg from "../../../assets/quiloco/productImg.png";
// function RecentSellingProduct() {
//   const { data, isLoading, isError } = useGetRecentProductQuery();

//   // Ensure data is available
//   const earnings = data?.data?.earnings || [];

//   // Format data for the table
//   const dataSource = earnings.map((item, index) => ({
//     key: item._id,
//     serial: `#${index + 1}`,
//     productName: item.productName || "N/A", // Provide fallback if missing
//     email: item.email,
//     createdAt: new Intl.DateTimeFormat("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     }).format(new Date(item.createdAt)),
//     totalPrice: `$${item.totalPrice.toLocaleString()}`,
//   }));

//   const columns = [
//     {
//       title: "SL#",
//       dataIndex: "serial",
//       key: "serial",
//     },
//     {
//       title: "Product Name",
//       dataIndex: "productName",
//       key: "productName",
//       render: (text) => (
//         <div className="flex items-center gap-2">
//           <Avatar shape="square" size="default" src={productImg} />
//           <span>{text}</span>
//         </div>
//       ),
//     },
//     {
//       title: "User Email",
//       dataIndex: "email",
//       key: "email",
//     },
//     {
//       title: "Date",
//       dataIndex: "createdAt",
//       key: "createdAt",
//     },
//     {
//       title: "Amount",
//       dataIndex: "totalPrice",
//       key: "totalPrice",
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: () => (
//         <a href="#" className="hover:text-[#a11d26]">
//           <IoEye size={24} />
//         </a>
//       ),
//     },
//   ];

//   return (
//     <ConfigProvider
//       theme={{
//         components: {
//           Table: {
//             headerBg: "#575858",
//             headerSplitColor: "none",
//             headerColor: "white",
//             borderColor: "#A3A3A3",
//             colorBgContainer: "#3a3a3a",
//             rowHoverBg: "#4a4a4a",
//             colorText: "white",
//           },
//         },
//       }}
//     >
//       <h3 className="text-white my-4 px-3">{GetPageName()}</h3>
//       <div className="custom-table px-3">
//         <Table
//           dataSource={dataSource}
//           columns={columns}
//           loading={isLoading}
//           pagination={false}
//         />
//       </div>
//     </ConfigProvider>
//   );
// }

// export default RecentSellingProduct;

import React, { useState } from "react";
import GetPageName from "../../../components/common/GetPageName";
import { Table, ConfigProvider, Avatar } from "antd";
import { useGetRecentProductQuery } from "../../../redux/apiSlices/overViewSlice";
import { IoEye } from "react-icons/io5";
import productImg from "../../../assets/quiloco/productImg.png";
import RecentProductDetails from "./RecentProductDetails"; // Import modal component

function RecentSellingProduct() {
  const { data, isLoading } = useGetRecentProductQuery();

  const earnings = data?.data?.earnings || [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const showModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const dataSource = earnings.map((item, index) => ({
    key: item._id,
    serial: `#${index + 1}`,
    productName: item.productName || "N/A",
    email: item.email,
    createdAt: new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(item.createdAt)),
    totalPrice: `$${item.totalPrice.toLocaleString()}`,
    fullData: item, // Store full product data for modal
  }));

  const columns = [
    { title: "SL#", dataIndex: "serial", key: "serial" },
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
      render: (text) => (
        <div className="flex items-center gap-2">
          <Avatar shape="square" size="default" src={productImg} />
          <span>{text}</span>
        </div>
      ),
    },
    { title: "User Email", dataIndex: "email", key: "email" },
    { title: "Date", dataIndex: "createdAt", key: "createdAt" },
    { title: "Amount", dataIndex: "totalPrice", key: "totalPrice" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <a
          href="#"
          onClick={() => showModal(record.fullData)}
          className="hover:text-[#a11d26]"
        >
          <IoEye size={24} />
        </a>
      ),
    },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: "#575858",
            headerSplitColor: "none",
            headerColor: "white",
            borderColor: "#A3A3A3",
            colorBgContainer: "#3a3a3a",
            rowHoverBg: "#4a4a4a",
            colorText: "white",
          },
        },
      }}
    >
      <h3 className="text-white my-4 px-3">{GetPageName()}</h3>
      <div className="custom-table px-3">
        <Table
          dataSource={dataSource}
          columns={columns}
          loading={isLoading}
          pagination={false}
        />
      </div>

      {/* Modal Component */}
      <RecentProductDetails
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        product={selectedProduct}
      />
    </ConfigProvider>
  );
}

export default RecentSellingProduct;
