import { toast } from "react-toastify";

export const toastIsRequired = (nameField) => {
  toast(`${nameField} is required.`);
};

export const toastIsValidEmail = () => {
  toast(`Email is not valid. Example: testmail@gmail.com`);
};
