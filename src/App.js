import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Map from "./components/Map";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <div id="container">
      <Header />
      <Hero />
      <Location />
      <Map />
      <Pricing />
    </div>
  );
};

export default App;
