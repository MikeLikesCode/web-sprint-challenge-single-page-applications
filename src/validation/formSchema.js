import * as yup from "yup";

const FormSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name is required!")
    .min(2,"name must be at least 2 characters")
    ,
  size: yup
    .string()
    .oneOf(['Small', 'Medium', 'Large'] ,'Size is required'),
  sauce: yup
    .string()
    .oneOf(['Original Red', 'Garlic Ranch', 'BBQ Sauce', 'Spinach Alfredo'], 'Sauce is required'),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  caBacon: yup.boolean(),
  siSausage: yup.boolean(),
  grChicken: yup.boolean(),
  onions: yup.boolean(),
  grPepper: yup.boolean(),
  diTomato: yup.boolean(),
  blOlives: yup.boolean(),
  roGarlic: yup.boolean(),
  arHearts: yup.boolean(),
  thCheese: yup.boolean(),
  pineapple: yup.boolean(),
  exCheese: yup.boolean(),
  special: yup
  .string()
  .trim()
});

export default FormSchema
