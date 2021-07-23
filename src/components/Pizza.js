import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, useHistory } from "react-router-dom";
import Order from "./Order"
import Form from "./Form";
import FormSchema from "../validation/formSchema";
import * as yup from "yup";

const initialFormValues = {
  name: "",
  size: "",
  sauce: "",
  special: "",
};

const initialFormErrors = {
  name: "",
  size: "",
  sauce: "",
  toppings: "",
  special: "",
};

const mainToppings = [
  "pepperoni",
  "sausage",
  "caBacon",
  "siSausage",
  "grChicken",
  "onions",
  "grPepper",
  "diTomato",
  "blOlives",
  "roGarlic",
  "arHearts",
  "thCheese",
  "pineapple",
  "exCheese",
];

export default function Pizza() {
  const [order, setOrder] = useState({});
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  const postNewOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((resp) => {
        console.log(resp);
        setOrder(resp.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(setFormValues(initialFormValues));
  };

  const validate = (name, value) => {
    yup
      .reach(FormSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      toppings: mainToppings.filter((topping) => formValues[topping]),
      special: formValues.special.trim(),
    };
    postNewOrder(newOrder);
    history.push("/pizza/confirm")
  };

  useEffect(() => {
    FormSchema.isValid(formValues).then((valid) =>
      valid ? setDisabled(false) : setDisabled(true)
    );
  }, [formValues]);

  return (
    <div>
      <Route path="/pizza/confirm">
        <Order order={order}/>
      </Route>
      <Route exact path="/pizza">
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      </Route>
    </div>
  );
}
