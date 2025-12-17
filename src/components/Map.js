import "./Map.css";

import MapList from "./MapList";

const Map = () => {
  return (
    <div id="map-container">
      <div id="map-title">
        <h1>Destination of Our Agency</h1>
        <p>Pack Your Bags and Get Ready</p>
      </div>

      <div id="map-list">
        <MapList
          name="Sukhbaatar square"
          location="Ulaanbaatar"
          day="1"
          color="#FEE09D"
        />
        <MapList
          name="Amarbayasgalant monastery"
          location="Bulgan"
          day="2"
          color="#BB8BC1"
        />
        <MapList
          name="Khorign toggo"
          location="Arkhangai"
          day="3"
          color="#AADD87"
        />
        <MapList
          name="Terkhiin tsagaan lake"
          location="Arkhangai"
          day="4"
          color="#8BBCD0"
        />
        <MapList
          name="Khuvsgul Lake"
          location="Khuvsgul"
          day="5"
          color="#97CCE0"
        />
      </div>
    </div>
  );
};

export default Map;
