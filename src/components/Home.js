import React from "react";
import styled from "styled-components";
import HeroImage from "../assets/food.jpg";
import { useHistory } from 'react-router-dom'

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: center;
`;

const HeroContent = styled.div`
  position: absolute;
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Home() {

  const history = useHistory();

  return (
    <div>
      <HeroContainer>
        <HeroContent>
          <h2>Your favorite food, delivered while coding</h2>
          <button id="order-pizza" onClick={() => history.push('/pizza')}>Pizza?</button>
        </HeroContent>
      </HeroContainer>
    </div>
  );
}
