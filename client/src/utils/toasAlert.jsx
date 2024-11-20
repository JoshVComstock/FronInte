import toast from "react-hot-toast";

export const toastSucces = (text) => {
  return toast.success(text);
};
export const toastError = (text) => {
  return toast.error(text);
};
