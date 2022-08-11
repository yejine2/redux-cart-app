import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 리덕스 전역 설정
  <Provider store={store}>
    <App />
  </Provider>
);
