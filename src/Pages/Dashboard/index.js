import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import PageHeader from "../../components/PageHeader";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as data from "../../utils/constant/app.json";
require("./style.scss");

const Dashboard = () => {
  const { productType: productData } = data;
  const navigate = useNavigate();
  const productType = useRef();
  const productQuantity = useRef();
  const productRequester = useRef();
  const truckNumber = useRef();
  const [showAlert, setShowAlert] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const type = productType.current.value;
    const quantity = productQuantity.current.value;
    const requester = productRequester.current.value;
    const truckNum = truckNumber.current.value;
    if ((type === "" || quantity === "", requester === "" || truckNum === "")) {
      setShowAlert(true);
      return;
    }

    const orderData = {
      type,
      quantity,
      requester,
      truckNum,
      date: new Date(),
    };
    console.log("orderData::", orderData);
    localStorage.setItem("orderData", JSON.stringify(orderData));
    navigate("/order");
  };

  const alertText = (
    <Alert variant={"danger"} onClose={() => setShowAlert(false)} dismissible>
      All fields are mandetory.
    </Alert>
  );

  return (
    <div className="dashboard">
      <Container className="main">
        {showAlert && alertText}
        <PageHeader text={"Add Product Information"} />
        <div className="content">
          <Form className="order-form">
            <Form.Group className="form-group" controlId="formGridEmail">
              <Form.Label>Product Type</Form.Label>
              <Form.Select defaultValue="Choose..." ref={productType} required>
                <option>Select Product Type</option>
                {productData.map((product) => {
                  return (
                    <option key={"product_" + product.id}>
                      {product.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>

            <Form.Group className="form-group" controlId="formGridPassword">
              <Form.Label>Product Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Product Quantity"
                ref={productQuantity}
                required
              />
            </Form.Group>

            <Form.Group className="form-group" controlId="formGridAddress1">
              <Form.Label>Requester Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Requester Name"
                ref={productRequester}
                required
              />
            </Form.Group>

            <Form.Group className="form-group" controlId="formGridAddress2">
              <Form.Label>Truck Number</Form.Label>
              <Form.Control
                placeholder="Enter Truck Number"
                ref={truckNumber}
                required
              />
            </Form.Group>

            <Button
              className="submit-btn"
              variant="primary"
              size="lg"
              type="submit"
              onClick={onSubmitHandler}
            >
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
