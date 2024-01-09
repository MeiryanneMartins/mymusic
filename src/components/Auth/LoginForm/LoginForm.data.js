import * as Yup from "yup";

export function initialValues() {
  return {
    mail:"",
    password:"",
  };
}

export function validationSchema() {
  return Yup.object({
    mail:Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  });
}