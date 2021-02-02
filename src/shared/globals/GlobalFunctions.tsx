import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = (text: string) =>
	toast(text, {
		type: "info",
		position: "bottom-right",
		hideProgressBar: true,
		autoClose: 3000,
	});
