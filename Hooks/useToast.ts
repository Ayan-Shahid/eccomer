import { ToastContext } from "./../Context/ToastProvider";
import { useContext } from "react";
const useToast = () => useContext(ToastContext);

export default useToast;
