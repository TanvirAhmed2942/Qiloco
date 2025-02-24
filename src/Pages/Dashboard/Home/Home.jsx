import React from "react";
import EarningOverview from "./EarningOverview";
import MonthlySale from "./MonthlySale";
import RerecentSellingProduct from "./RerecentSellingProduct";

const stats = [
  { label: "Total User", value: "518", icon: "", bg: "bg-quilocoS" },
  { label: "Total Earning", value: `$${78464}`, icon: "", bg: "bg-quilocoS" },
];

const Card = ({ item }) => (
  <div className="flex w-full items-center justify-start pl-10 h-32 rounded-xl bg-quilocoP gap-5">
    <div
      className={`${item.bg} w-20 h-20 flex items-center justify-center rounded-full`}
    >
      {item.icon && <img src={item.icon} width={32} alt={item.label} />}
    </div>
    <div className="flex flex-col">
      <h1 className="text-[24px] text-white font-normal mb-1">{item.label}</h1>
      <p className="text-[32px] text-white font-medium">{item.value}</p>
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
      <div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-5 w-full ">
        <div className="w-[50%] p-4 bg-quilocoP rounded-lg">
          <EarningOverview />
        </div>
        <div className="w-[50%] p-4 bg-quilocoP rounded-lg">
          <MonthlySale />
        </div>
      </div>
      <div className="w-full ">
        <h3 className="text-white text-[24px] font-bold mb-2">
          Recent Selling Products
        </h3>
        <div className="h-60 overflow-y-scroll rounded-lg bg-quilocoP">
          <RerecentSellingProduct />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
