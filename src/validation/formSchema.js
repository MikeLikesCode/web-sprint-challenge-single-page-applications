import * as yup from "yup";

const FormSchema = yup.object().shape({
  fullName: yup
    .string()
    .trim()
    .required("Name is required!")
    .min(2,"name must be at least 2 characters")
    ,
  size: yup
    .string()
    .oneOf(['Small', 'Medium', 'Large','Size is required']),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  caBacon: yup.boolean(),
  pineapple: yup.boolean(),
  special: yup
  .string()
  .trim()
});

export default FormSchema
