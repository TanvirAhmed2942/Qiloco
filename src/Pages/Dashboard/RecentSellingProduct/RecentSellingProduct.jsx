// import React, { useState } from "react";
// import GetPageName from "../../../components/common/GetPageName";
// import { Table, ConfigProvider, Avatar } from "antd";
// import { useGetRecentProductQuery } from "../../../redux/apiSlices/overViewSlice";
// import { IoEye } from "react-icons/io5";
// import productImg from "../../../assets/quiloco/productImg.png";
// import RecentProductDetails from "./RecentProductDetails"; // Import modal component
// import { getImageUrl } from "../../../components/common/ImageUrl";

// function RecentSellingProduct() {
//   const { data, isLoading } = useGetRecentProductQuery();

//   const earnings = data?.data?.earnings || [];

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const showModal = (product) => {
//     setSelectedProduct(product);
//     setIsModalOpen(true);
//   };

//   const dataSource = earnings.map((item, index) => ({
//     key: item._id,
//     serial: `#${index + 1}`,
//     productName: item.name || "N/A",
//     email: item.email,
//     createdAt: new Intl.DateTimeFormat("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     }).format(new Date(item.createdAt)),
//     totalPrice: `$${item.totalPrice.toLocaleString()}`,
//     fullData: item, // Store full product data for modal
//   }));

//   console.log("productImg", productImg);
//   const columns = [
//     { title: "SL#", dataIndex: "serial", key: "serial" },
//     {
//       title: "Product Name",
//       dataIndex: "productName",
//       key: "productName",
//       render: (text) => (
//         <div className="flex items-center gap-2">
//           <Avatar shape="square" size="default" src={getImageUrl(productImg)} />
//           <span>{text}</span>
//         </div>
//       ),
//     },
//     { title: "User Email", dataIndex: "email", key: "email" },
//     { title: "Date", dataIndex: "createdAt", key: "createdAt" },
//     { title: "Amount", dataIndex: "totalPrice", key: "totalPrice" },
//     {
//       title: "Action",
//       key: "action",
//       render: (_, record) => (
//         <a
//           href="#"
//           onClick={() => showModal(record.fullData)}
//           className="hover:text-[#a11d26]"
//         >
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

//       {/* Modal Component */}
//       <RecentProductDetails
//         isModalOpen={isModalOpen}
//         setIsModalOpen={setIsModalOpen}
//         product={selectedProduct}
//       />
//     </ConfigProvider>
//   );
// }

// export default RecentSellingProduct;

import React, { useState, useEffect } from "react";
import { Table, ConfigProvider, Input, Select, Spin, Alert } from "antd";
import { FiPlusCircle } from "react-icons/fi";
import { IoEye } from "react-icons/io5";

import { useProductQuery } from "../../../redux/apiSlices/productSlice";
import { imageUrl } from "../../../redux/api/baseApi";

function Products() {
  const { data: products, isLoading, isError } = useProductQuery(); // Fetch products

  const rawProducts = products?.data?.products || []; // Ensure it's always an array

  // if (isLoading) return <Loading />;
  if (isError) return <Alert message="Failed to load products!" type="error" />;

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBg: "#d99e1e",
            defaultColor: "black",
            defaultBorderColor: "#d99e1e",
            defaultHoverBg: "#d99e1e",
            defaultHoverColor: "black",
            defaultHoverBorderColor: "#d99e1e",
            defaultActiveBg: "#d99e1e",
            defaultActiveColor: "black",
            defaultActiveBorderColor: "#d99e1e",
          },
        },
      }}
    >
      <div className="px-3 py-4">
        <div className="flex items-center gap-4">
          <p className="text-sm text-samba py-4">Latest Product List:</p>
          <Select
            placeholder="Select Category"
            className="border rounded-lg"
            style={{ width: 180 }}
            onChange={(value) => console.log(`selected ${value}`)}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "Yiminghe" },
            ]}
          />
        </div>

        {/* Passing products to the ProductTable component */}
        <ProductTable products={rawProducts} />
      </div>
    </ConfigProvider>
  );
}

export default Products;

const ProductTable = ({ products }) => {
  const [localProducts, setLocalProducts] = useState(products);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setLocalProducts(products);
  }, [products]);

  const showModal = (record) => {
    setSelectedProduct(record);
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "Serial",
      dataIndex: "serial",
      key: "serial",
      render: (_, __, index) => `#${index + 1}`,
    },
    {
      title: "Product Name",
      dataIndex: "productname",
      key: "productname",
      render: (_, record) => (
        <div className="flex items-center gap-2">
          <img
            src={imageUrl(record.image[0])}
            alt={record.name}
            width={50}
            height={50}
          />
          <span>{record.name}</span>
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${price}`,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <a href="#" onClick={() => showModal(record)}>
          <IoEye size={24} />
        </a>
      ),
    },
  ];

  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: "#575858",
              headerColor: "white",
              borderColor: "#A3A3A3",
              colorBgContainer: "#3a3a3a",
              rowHoverBg: "#4a4a4a",
              colorText: "white",
            },
          },
        }}
      >
        <Table
          columns={columns}
          dataSource={localProducts}
          rowKey="_id"
          pagination={{
            defaultPageSize: 5,
            position: ["bottomRight"],
            size: "default",
            total: localProducts.length,
          }}
        />
      </ConfigProvider>

      {/* Add Product Modal */}
      {/* <AddProductModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        productData={selectedProduct}
      /> */}
    </div>
  );
};
