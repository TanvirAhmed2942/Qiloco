import React from "react";
import UserStatistics from "./UserStatistics";

const stats = [
  { label: "User", value: "100", icon: "", bg: "bg-[#f4f6fd]" },
  { label: "Service Provider", value: "12K", icon: "", bg: "bg-[#f3f3ff]" },
];

const Card = ({ item }) => (
  <div className="flex w-full items-center justify-center h-32 rounded-xl bg-white gap-5">
    <div
      className={`${item.bg} w-20 h-20 flex items-center justify-center rounded-full`}
    >
      {item.icon && <img src={item.icon} width={32} alt={item.label} />}
    </div>
    <div className="flex flex-col">
      <h1 className="text-[32px] font-semibold mb-1">{item.value}</h1>
      <p className="text-[18px] text-paragraph font-medium">{item.label}</p>
    </div>
  </div>
);

const Home = () => (
  <div className="px-5">
    <div className="flex flex-col flex-wrap items-end gap-5 justify-between w-full bg-transparent rounded-md">
      <div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-5 w-full">
        {stats.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-5 w-full bg-gray-400 rounded-lg">
        <div className="w-[45%] bg-white">
          <UserStatistics />
        </div>
        <div className="w-[45%] bg-white">
          <UserStatistics />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
