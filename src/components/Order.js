import React from "react";
import styled from "styled-components";
import PizzaImg from "../assets/Pizza.jpg";

const PizzaImage = styled.img`
  margin-bottom: 4vh;
  width: 100%;
  object-fit: cover;
  height: 45vh;
`;

const OrderInformation = styled.div`
  margin: 0 auto;
  width: 60%;
  text-align:center;

  h2{
      margin:0;
  }
`;

export default function Order(props) {
  console.log(props);
  const { name, sauce, size, special, toppings } = props.order;

  if (!props.order.toppings) return <h1>Loading...</h1>;

  return (
    <div>
      <PizzaImage src={PizzaImg} />
      <OrderInformation>
        <h2>Here are your order details:</h2>
        <div> Name: {name}</div>
        <div> Sauce: {sauce}</div>
        <div> Size: {size}</div>
        <div> Special Instructions: {special}</div>
        <div>
          Toppings:
          {toppings.map((topping) => (
            <div style={{textTransform:'capitalize'}}>{topping}</div>
          ))}{" "}
        </div>
      </OrderInformation>
    </div>
  );
}
