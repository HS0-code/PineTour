import React from "react";
import "./MapList.css";

const MapList = (props) => {
  return (
    <div className="map-list" style={{ backgroundColor: props.color }}>
      <div className="map-info">
        <h3>{props.name}</h3>

        <div className="map-location">
          <img src="pin.svg" alt="" />
          <p>{props.location}</p>
        </div>
      </div>

      <div className="map-day">DAY {props.day}</div>
    </div>
  );
};

export default MapList;
