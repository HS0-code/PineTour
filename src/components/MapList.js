import React from "react";

const MapList = (props) => {
  return (
    <div
      style={{
        width: "500px",
        padding: "30px",
        borderRadius: "100px",
        backgroundColor: props.color,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <h3 style={{ margin: 0, padding: 0 }}>{props.name}</h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="/pin.svg" alt="" height="14px" width="14px" />
          <p style={{ margin: 0 }}>{props.location}</p>
        </div>
      </div>

      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "25px",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 14,
          fontWeight: 500,
        }}
      >
        DAY {props.day}
      </div>
    </div>
  );
};

export default MapList;
