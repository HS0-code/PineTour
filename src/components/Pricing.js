import "./Pricing.css";

const Pricing = () => {
  return (
    <div id="pricing-section">
      <h1 id="pricing-title">Pricing of Our Agency</h1>
      <p id="pricing-subtitle">Choose A Package That's Right For You</p>

      <div id="pricing-cards">
        <div className="pricing-card">
          <div className="pricing-heart">❤</div>

          <h3 className="pricing-card-title">Budget Package</h3>
          <h1 className="pricing-price">500$</h1>
          <p className="pricing-tagline">Essentials Covered</p>

          <div className="pricing-includes">
            <p>Includes:</p>
            <ul>
              <li>Group transportation (shared van/bus)</li>
              <li>Standard accommodation (yurt or guesthouse)</li>
              <li>Guided lake tour</li>
              <li>1 meal per day (breakfast)</li>
            </ul>
          </div>

          <button className="pricing-btn">Select package</button>
        </div>

        <div className="pricing-card">
          <div className="pricing-heart">❤</div>

          <h3 className="pricing-card-title">Standard Package</h3>

          <div className="pricing-price-row">
            <h1 className="pricing-price">800$</h1>
            {true && <span className="pricing-popular">Popular</span>}
          </div>

          <p className="pricing-tagline">Balanced Adventure</p>

          <div className="pricing-includes">
            <p>Includes:</p>
            <ul>
              <li>Comfortable transportation (mini-bus)</li>
              <li>Mid-range accommodation (private yurt or lodge)</li>
              <li>Guided lake tour + nearby hiking</li>
              <li>2 meals per day (breakfast and dinner)</li>
            </ul>
          </div>

          <button className="pricing-btn">Select package</button>
        </div>

        <div className="pricing-card">
          <div className="pricing-heart">❤</div>

          <h3 className="pricing-card-title">Luxury Package</h3>
          <h1 className="pricing-price">1200$</h1>
          <p className="pricing-tagline">Ultimate Comfort</p>

          <div className="pricing-includes">
            <p>Includes:</p>
            <ul>
              <li>Private transportation (SUV)</li>
              <li>Luxury accommodation (lakefront lodge)</li>
              <li>Guided tours (lake + reindeer herder experience)</li>
              <li>All meals included (local cuisine)</li>
            </ul>
          </div>

          <button className="pricing-btn">Select package</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
