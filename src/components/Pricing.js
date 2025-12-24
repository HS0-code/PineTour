import React from "react";
import PricingCard from "./PricingCard";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div
      style={{
        backgroundColor: "#9FC6DE",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: "100px 0",
      }}
    >
      <h1 id="title">Pricing of Our Agency</h1>

      <h3 style={{ fontSize: 20, fontWeight: 500, color: "#18181B" }}>
        Choose a package that’s right for you
      </h3>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <PricingCard
          price="500"
          packageType="Budget"
          description="Essentials Covered"
          popular={false}
          includes={[
            "Group transportation (shared van/bus)",
            "Standard accommodation (yurt or guesthouse)",
            "Guided lake tour",
            "1 meal per day (breakfast)",
          ]}
        />
        <PricingCard
          price="800"
          packageType="Standard"
          description="Balanced Adventure"
          popular={true}
          includes={[
            "Comfortable transportation (mini-bus)",
            "Mid-range accommodation (private yurt or lodge)",
            "Guided lake tour + nearby hiking",
            "2 meals per day (breakfast and dinner)",
          ]}
        />
        <PricingCard
          price="1200"
          packageType="Luxury"
          description="Ultimate Comfort"
          popular={false}
          includes={[
            "Private transportation (SUV)",
            "Luxury accommodation (lakefront lodge)",
            "Guided tours (lake + reindeer herder experience)",
            "All meals included (local cuisine)",
          ]}
        />
      </div>
    </div>
  );
};

export default Pricing;
