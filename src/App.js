import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <AppRoutes />
        {/* <Footer /> */}
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
