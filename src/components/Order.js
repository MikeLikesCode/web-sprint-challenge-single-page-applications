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
  text-align: center;

  h2 {
    margin: 0;
  }
`;

export default function Order(props) {
  console.log(props);
  const { order } = props;
  const toppings = [];

  for(const [key,value] of Object.entries(order)){
    if(value === true){
      toppings.push(key)
    }
  }

  if (!order) return <h1>Loading...</h1>;

  return (
    <div>
      <PizzaImage src={PizzaImg} />
      <OrderInformation>
        <h2>Here are your order details:</h2>
        <div> Name: {order.fullName}</div>
        <div> Sauce: {order.sauce}</div>
        <div> Size: {order.size}</div>
        {order.special ? (
          <div> Special Instructions: {order.special}</div>
        ) : null}
        <div>
          Toppings:
          {
            toppings.map((topping,idx) => (<div key={idx}>
                {topping}
               </div>))
          }
        </div>
      </OrderInformation>
    </div>
  );
}
