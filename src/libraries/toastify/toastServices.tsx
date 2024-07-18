import { ToastContainer } from "react-toastify";

const ToastServices = () => (
  <ToastContainer
    draggable
    rtl={false}
    theme="dark"
    pauseOnHover
    closeOnClick
    autoClose={3000}
    pauseOnFocusLoss
    newestOnTop={false}
    position="top-right"
    hideProgressBar={false}
    toastStyle={{
      width: "100%",
      position: "absolute",
      alignItems: "center",
      background: "#081320",
    }}
  />
);

export default ToastServices;
