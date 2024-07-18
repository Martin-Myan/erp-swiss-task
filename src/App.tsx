import { BrowserRouter } from "react-router-dom";

import { PageLayout } from "./components";
import ToastServices from "./libraries/toastify/toastServices";

import "react-toastify/dist/ReactToastify.css";

import "./styles/index.global.scss";

const App = () => (
  <BrowserRouter>
    <PageLayout />
    <ToastServices />
  </BrowserRouter>
);

export default App;
