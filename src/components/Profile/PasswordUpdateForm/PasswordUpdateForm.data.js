import * as Yup from "yup";

export function initialValues() {
  return {
    password: "",
    newPassword: "",
    repeatNewPassword:"",
  };
}

export function validationSchema() {
  return Yup.object({
    password: Yup.string().required(true),
    newPassword: Yup.string().required(true),
    repeatNewPassword: Yup.string()
      .required(true)
      .oneOf([Yup.ref("newPassword")], true),
  });
}