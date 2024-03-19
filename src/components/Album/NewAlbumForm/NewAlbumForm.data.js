import * as Yup from "yup";

export function initialValues() {
  return {
    name: "",
    artist:"",
  };
}

export function validationSchema() {
  return Yup.object({
    name: Yup.string().required(true),
    artist: Yup.string().required(true),
  });
}