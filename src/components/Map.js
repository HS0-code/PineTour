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
          location="Ulaanbator"
          day="1"
          color="#EEE9D9"
        />
        <MapList
          name="Amarbaysgalant monastery"
          location="Bulgan"
          day="2"
          color="#8BB8C1"
        />
        <MapList
          name="Khorgiin togoo"
          location="Arkhangai"
          day="3"
          color="#AAD8D7"
        />
        <MapList
          name="Terkhiin tsagaan lake"
          location="Arkhangai"
          day="4"
          color="#8BC0BD"
        />
        <MapList
          name="Khuvsgul lake"
          location="Khuvsgul"
          day="5"
          color="#97CCE0"
        />
      </div>
    </div>
  );
};

export default Map;
