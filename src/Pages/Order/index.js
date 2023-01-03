import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import PageHeader from "../../components/PageHeader";
import DataLable from "../../components/DataLabel";
require("./style.scss");

const Order = () => {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orderData"));
    if (data) {
      setOrderData(data);
    }
  }, []);

  const orderLabel = orderData && (
    <>
      <DataLable label={"Product Type"} value={orderData.type} />
      <DataLable label={"Total Product Quantity"} value={orderData.quantity} />
      <DataLable label={"Current Product Quantity"} value="Test" />
      <DataLable label={"Tag/Price Missing Products"} value="Test" />
      <DataLable label={"Truck Number"} value={orderData.truckNum} />
      <div className="date-time">
        <div>
          <DataLable
            label={"Start Date"}
            value={new Date(orderData.date).toLocaleDateString()}
          />
        </div>
        <div>
          <DataLable
            label={"Start Time"}
            value={new Date(orderData.date).toLocaleTimeString("en-US")}
          />
        </div>
      </div>
    </>
  );

  return (
    <div className="order">
      <Container className="main">
        <PageHeader text={"Order Status"} />
        <div className="content">
          <div className="video">
            <iframe
              title="video"
              width="420"
              height="345"
              src="https://www.youtube.com/embed/PhwRXkNRDSc"
            ></iframe>
          </div>
          {orderLabel}
        </div>
      </Container>
    </div>
  );
};

export default Order;
