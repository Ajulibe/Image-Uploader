import { ToastOptions, toast } from "react-toastify";
import { COLORS } from "styles/colors";

type Message = "error" | "success";

export const doToast = (message: string, type: Message) => {
 let bgColor;
 let color;

 //set colors based on error type
 if (type === "success") {
  bgColor = COLORS.success;
 } else if (type === "error") {
  bgColor = COLORS.red;
 }

 //custom options for toast
 const options = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  style: { backgroundColor: bgColor, color: color },
 } as ToastOptions<{}>;

 if (type) {
  toast[type](message ?? "", options);
 } else {
  toast.success(message ?? "", options);
 }
};
