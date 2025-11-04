import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { StrictMode } from "react";
import "./i18n";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
