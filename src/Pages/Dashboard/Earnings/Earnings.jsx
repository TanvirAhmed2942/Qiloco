import React, { useState } from "react";
import { LuArrowLeftRight } from "react-icons/lu";
import { Table, ConfigProvider } from "antd";
import { IoEye } from "react-icons/io5";
import TransactionDetailsModal from "./TransactionDetailsModal";
function Earnings() {
  return (
    <div className="px-3">
      <div className="w-[576px] h-14 flex justify-between my-4">
        <div className="bg-[#121314] text-white flex items-center justify-evenly w-[278px] h-full rounded-lg">
          <LuArrowLeftRight size={25} />
          Today's Earning
          <span>${3587}</span>
        </div>
        <div className="bg-[#121314] text-white flex items-center justify-evenly w-[278px] h-full rounded-lg">
          <LuArrowLeftRight size={25} />
          Today's Earning
          <span>${3587}</span>
        </div>
      </div>
      <EarningsTable />
    </div>
  );
}

export default Earnings;

const EarningsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (record) => {
    setIsModalOpen(true); // Open modal
  };
  const columns = [
    {
      title: "Serial",
      dataIndex: "serial",
      key: "serial",
    },
    {
      title: "Product Name",
      dataIndex: "productname",
      key: "productname",
    },
    {
      title: "Customer Name",
      dataIndex: "customername",
      key: "customername",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Ammount",
      dataIndex: "ammount",
      key: "ammount",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <a
          href="#"
          className="hover:text-[#a11d26]"
          onClick={(e) => {
            e.preventDefault();
            showModal(record); // Pass row data
          }}
        >
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
        <div className="custom-table">
          <Table columns={columns} dataSource={rawData} pagination />
        </div>
      </ConfigProvider>
      <TransactionDetailsModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

const rawData = [
  {
    key: "1",
    serial: "001",
    productname: "Wireless Mouse",
    customername: "Michael Johnson",
    date: "2024-02-20",
    ammount: "$25.99",
    status: "Delivered",
    pic: "https://via.placeholder.com/50",
  },
  {
    key: "2",
    serial: "002",
    productname: "Mechanical Keyboard",
    customername: "John Smith",
    date: "2024-02-18",
    ammount: "$79.99",
    status: "Pending",
    pic: "https://via.placeholder.com/50",
  },
  {
    key: "3",
    serial: "003",
    productname: "Gaming Headset",
    customername: "Emily Brown",
    date: "2024-02-15",
    ammount: "$49.99",
    status: "Shipped",
    pic: "https://via.placeholder.com/50",
  },
  {
    key: "4",
    serial: "004",
    productname: "USB-C Docking Station",
    customername: "Daniel Wilson",
    date: "2024-02-12",
    ammount: "$129.99",
    status: "Processing",
    pic: "https://via.placeholder.com/50",
  },
  {
    key: "5",
    serial: "005",
    productname: "4K Monitor",
    customername: "Sophia Martinez",
    date: "2024-02-10",
    ammount: "$299.99",
    status: "Delivered",
    pic: "https://via.placeholder.com/50",
  },
];
