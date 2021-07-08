import React from "react";
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Tevanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">R$2,415</span>
          <span className="featuredMoneyRate">
            -2,415 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared To las month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">R$2,415</span>
          <span className="featuredMoneyRate">
            -2,415 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared To las month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">R$2,415</span>
          <span className="featuredMoneyRate">
            -2,415 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared To las month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
