import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js"; // Updated import path to lowercase
import "sweetalert2/dist/sweetalert2.js";
import "semantic-ui-css/semantic.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
