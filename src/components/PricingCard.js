import React from "react";

const PricingCard = (props) => {
  return (
    <div
      style={{
        margin: "0 10px",
        maxWidth: "337px",
        borderRadius: "40px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "92px",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div
          style={{
            height: "36px",
            width: "36px",
            borderRadius: "50%",
            border: "1px solid grey",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/heart-icon.png"
            alt="icon"
            style={{ height: "16px", width: "16px" }}
          />
        </div>
        {props.packageType} package
      </div>

      <div>
        <h1
          style={{ fontSize: "40px", fontWeight: 600, margin: 0, padding: 0 }}
        >
          {props.price}$
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ color: "#919191", fontSize: "16px" }}>
            {props.description}
          </p>

          {props.popular && (
            <div
              style={{
                width: "91px",
                height: "27px",
                borderRadius: "15px",
                backgroundColor: "#6972B5",
                color: "white",
                fontSize: "16px",
                fontWeight: 500,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Popular
            </div>
          )}
        </div>

        <div>
          <p style={{ margin: 0 }}>Includes:</p>

          {props.includes.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 14,
                  fontWeight: 500,
                  margin: "10px 0",
                }}
              >
                <img
                  src="check.png"
                  alt=""
                  height={20}
                  width={20}
                  style={{ marginRight: "20px" }}
                />
                {item}
              </div>
            );
          })}
        </div>
      </div>

      <button
        style={{
          backgroundColor: "#A4D1E2",
          height: 48,
          borderRadius: 24,
          width: "100%",
          marginTop: 30,
          marginBottom: 20,
          fontSize: 16,
          fontWeight: 600,
          border: "none",
        }}
      >
        Select package
      </button>
    </div>
  );
};

export default PricingCard;
