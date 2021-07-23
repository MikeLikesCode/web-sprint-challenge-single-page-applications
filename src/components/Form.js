import React from "react";
import styled from 'styled-components'
import PizzaImg from '../assets/Pizza.jpg'

const FormContainer = styled.div`
    margin: 0 auto;
    margin-bottom: 4vh;
    width: 60%;
    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.35);

    h2{
     padding: 20px;
     text-align: center;
     border: 3px solid black;
     margin-bottom:0;
    }

    label{
      padding: 0 20px;  
    }

    input{
      margin: 6px 8px;
    }
`

const PizzaImage = styled.img`
    margin-bottom: 4vh;
    width: 100%;
    object-fit: cover;
    height: 35vh;
`

const SectionHeader = styled.div`
    width: 100%;
    padding: 1.5vh 2vw;
    background-color:#E0E0E0;
    margin: 2vh 0;

    h3{
     font-size: 2rem;
     font-weight: 500;
     margin:0;
    }

    p{
     margin:0;
    }
`

const SectionContent = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    padding: 0 25px;
    margin: 2vh 0;
`

const SizeSelect = styled.select`
    width: 350px;
    padding: 5px 10px;
`

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <FormContainer>
    <form id="pizza-form" onSubmit={onSubmit}>
      <div>
        <div>{errors.fullName}</div>
        <div>{errors.size}</div>
        <div>{errors.sauce}</div>
        <div>{errors.toppings}</div>
      </div>

      <h2> Build Your Own Pizza</h2>
      <PizzaImage src={PizzaImg}/>

      <label>
        Name
        <input
          value={values.fullName}
          onChange={onChange}
          id="name-input"
          name="fullName"
          type="text"
        />
      </label>

    
      <SectionHeader>
          <h3>Choice of Size</h3>
          <p>Required</p>
      </SectionHeader>
      
      <SectionContent>
      <SizeSelect id="size-dropdown" name="size" onChange={onChange} value={values.size}>
          <option value="Choose a Size"> --- Choose a size --- </option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
      </SizeSelect>
      </SectionContent>

      <SectionHeader>
          <h3>Choice of Sauce</h3>
          <p>Required</p>
      </SectionHeader>

      <SectionContent>
        <label>
        <input type="radio" name="sauce" value="Original Red" onChange={onChange} checked={values.sauce === "Original Red"}/>
         Original Red
        </label>

        <label>
        <input type="radio" name="sauce" value="Garlic Ranch" onChange={onChange} checked={values.sauce === "Garlic Ranch"}/>
        Garlic Ranch
        </label>

        <label>
        <input type="radio" name="sauce" value="BBQ Sauce" onChange={onChange} checked={values.sauce === "BBQ Sauce"}/>
        BBQ Sauce 
        </label>

        <label>
        <input type="radio" name="sauce" value="Spinach Alfredo" onChange={onChange} checked={values.sauce === "Spinach Alfredo"}/>
        Spinach Alfredo
        </label>
      </SectionContent>

      <SectionHeader>
          <h3>Choice of Toppings</h3>
          <p>Choose up to 10</p>
      </SectionHeader>

      <SectionContent>
      <label>Pepperoni
         <input type="checkbox" name="pepperoni" onChange={onChange} checked={values.pepperoni}/>
        </label>

        <label>Sausage
        <input type="checkbox" name="sausage" onChange={onChange} checked={values.sausage}/>
        </label>

        <label>Canadian Bacon
        <input type="checkbox" name="caBacon"  onChange={onChange} checked={values.caBacon}/>
        </label>

        <label>Spicy Italian Sausage
         <input type="checkbox" name="siSausage" onChange={onChange} checked={values.siSausage}/>
        </label>

        <label>Grilled Chicken
        <input type="checkbox" name="grChicken" onChange={onChange} checked={values.grChicken}/>
        </label>

        <label>Onions
        <input type="checkbox" name="onions"  onChange={onChange} checked={values.onions}/>
        </label>

        <label>Green Pepper
         <input type="checkbox" name="grPepper" onChange={onChange} checked={values.grPepper}/>
        </label>

        <label>Diced Tomato
        <input type="checkbox" name="diTomato" onChange={onChange} checked={values.diTomato}/>
        </label>

        <label>Black Olives
        <input type="checkbox" name="blOlives"  onChange={onChange} checked={values.blOlives}/>
        </label>

        <label>Roasted Garlic
         <input type="checkbox" name="roGarlic" onChange={onChange} checked={values.roGarlic}/>
        </label>

        <label>Artichoke Hearts
        <input type="checkbox" name="arHearts" onChange={onChange} checked={values.arHearts}/>
        </label>

        <label>Three Cheese
        <input type="checkbox" name="thCheese"  onChange={onChange} checked={values.thCheese}/>
        </label>

        <label>Pineapple
         <input type="checkbox" name="pineapple" onChange={onChange} checked={values.pineapple}/>
        </label>

        <label>Extra Cheese
        <input type="checkbox" name="exCheese" onChange={onChange} checked={values.exCheese}/>
        </label>

      </SectionContent>

      <SectionHeader>
          <h3>Special Instructions</h3>
      </SectionHeader>

      <SectionContent>
        <label> Anything else you would like to add?</label>
        <input id="special-text" onChange={onChange} type="text" name="special"></input>
        
      </SectionContent>      

     

      <button id="order-button" disabled={disabled}>
        Add to Order
      </button>
      </form>
    </FormContainer>
  );
}
