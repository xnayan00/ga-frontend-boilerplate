import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import "./i18n";
import { StrictMode } from "react";

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
