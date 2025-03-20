// import React, { useState } from "react";
// import { Table, Avatar, ConfigProvider, Input } from "antd";
// import { FiPlusCircle } from "react-icons/fi";
// import { IoEye } from "react-icons/io5";
// import AddProductModal from "./AddProductModal";
// import { SearchOutlined } from "@ant-design/icons"; // Corrected import
// import { useProductQuery } from "../../../redux/apiSlices/productSlice";

// function Products() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const {
//     data: product,
//     isLoading,
//     isFetching,
//     isError,
//     isSuccess,
//   } = useProductQuery();

//   // Extracting and formatting the data for the table
//   const rawData = product?.data?.products;
//   const dataSource = rawData?.map((item) => ({
//     key: item._id, // Use _id as the unique key
//     serial: `#${item._id.slice(-4)}`, // Generating a serial number using last 4 chars of _id
//     productname: item.name,
//     filter: item.moodTag.join(", "), // Joining mood tags with commas
//     size: item.quality, // Assuming size is mapped to 'quality' field
//     filtermood: item.moodTag.join(", "), // Showing the same as filter
//     price: `$${item.price}`,
//     description: item.description,
//     image: item.image[0], // Using the first image in the array
//   }));

//   const showModal = () => {
//     setIsModalOpen(true);
//   };

//   const columns = [
//     {
//       title: "SL#",
//       dataIndex: "serial",
//       key: "serial",
//       render: (item, record, index) => <>#{index + 1}</>,
//     },
//     {
//       title: "Product Name",
//       dataIndex: "productname",
//       key: "productname",
//       render: (_, record) => (
//         <div className="flex items-center gap-2">
//           <Avatar shape="square" size="default" src={record.image} />
//           <span>{record.productname}</span>
//         </div>
//       ),
//     },
//     {
//       title: "Filter",
//       dataIndex: "filter",
//       key: "filter",
//     },
//     {
//       title: "Size",
//       dataIndex: "size",
//       key: "size",
//     },
//     {
//       title: "Filter by mood",
//       dataIndex: "filtermood",
//       key: "filtermood",
//     },
//     {
//       title: "Price",
//       dataIndex: "price",
//       key: "price",
//     },
//     {
//       title: "Description",
//       dataIndex: "description",
//       key: "description",
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
//           Input: {
//             activeBg: "black",
//             hoverBg: "black",
//             hoverBorderColor: "white",
//             activeBorderColor: "#a11d26 ",
//           },
//         },
//       }}
//     >
//       <div className="px-3 py-4">
//         <div className="text-white flex justify-between mb-4">
//           <Input
//             placeholder="Search..."
//             className="w-64 bg-quilocoP text-white"
//             prefix={
//               <SearchOutlined style={{ fontSize: 20, marginRight: 15 }} />
//             }
//           />
//           <button
//             className="h-12 flex items-center justify-center gap-4 px-10 bg-quilocoP rounded-lg"
//             onClick={showModal}
//           >
//             <FiPlusCircle size={22} />
//             Add New Product
//           </button>
//         </div>

//         <div className="custom-table">
//           {/* Show all products without filtering */}
//           <Table
//             dataSource={dataSource}
//             columns={columns}
//             pagination={true}
//             loading={isLoading || isFetching}
//           />
//         </div>
//         <AddProductModal
//           isModalOpen={isModalOpen}
//           setIsModalOpen={setIsModalOpen}
//         />
//       </div>
//     </ConfigProvider>
//   );
// }

// export default Products;

import React, { useState } from "react";
import { Table, Avatar, ConfigProvider, Input } from "antd";
import { FiPlusCircle } from "react-icons/fi";
import { IoEye } from "react-icons/io5";
import AddProductModal from "./AddProductModal";
import { SearchOutlined } from "@ant-design/icons"; // Corrected import
import { useProductQuery } from "../../../redux/apiSlices/productSlice";

function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    data: product,
    isLoading,
    isFetching,
    isError,
    isSuccess,
  } = useProductQuery();

  // If data is not loaded, show an empty array or a fallback
  const rawData = product?.data?.products || [];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "SL#",
      dataIndex: "serial",
      key: "serial",
      render: (text, record, index) => <>#{index + 1}</>,
    },
    {
      title: "Product Name",
      dataIndex: "productname",
      key: "productname",
      render: (_, record) => (
        <div className="flex items-center gap-2">
          <Avatar shape="square" size="default" src={record.image[0]} />
          <span>{record.productname}</span>
        </div>
      ),
    },
    {
      title: "Filter",
      dataIndex: "filter",
      key: "filter",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Filter by mood",
      dataIndex: "moodTag",
      key: "moodTag",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <a href="#" className="hover:text-[#a11d26]">
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
          Input: {
            activeBg: "black",
            hoverBg: "black",
            hoverBorderColor: "white",
            activeBorderColor: "#a11d26 ",
          },
        },
      }}
    >
      <div className="px-3 py-4">
        <div className="text-white flex justify-between mb-4">
          <Input
            placeholder="Search..."
            className="w-64 bg-quilocoP text-white"
            prefix={
              <SearchOutlined style={{ fontSize: 20, marginRight: 15 }} />
            }
          />
          <button
            className="h-12 flex items-center justify-center gap-4 px-10 bg-quilocoP rounded-lg"
            onClick={showModal}
          >
            <FiPlusCircle size={22} />
            Add New Product
          </button>
        </div>

        <div className="custom-table">
          {/* Show all products directly */}
          <Table
            dataSource={rawData}
            columns={columns}
            pagination={true}
            loading={isLoading || isFetching}
            rowKey="_id" // Use _id as the unique key
          />
        </div>
        <AddProductModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </ConfigProvider>
  );
}

export default Products;
