import Card from "./Card";
import "./Location.css";
 
const Location = () => {
  return (
    <div id="card-section">
      <Card imagePath="/image-1.png" title="Terkhiin tsagaan lake" />
      <Card imagePath="/image-2.png" title="Amarbayasgalant Monastery" />
      <Card imagePath="/image-3.png" title="Khuvsgul lake" />
      <Card imagePath="/image-4.png" title="Khorgiin togoo" />
    </div>
  );
};
 
export default Location;