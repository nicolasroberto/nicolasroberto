import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import { Layout } from "./Layout/Layout";
import { Home } from "./pages/Home";

/* import "bootstrap/dist/css/bootstrap.min.css"; */

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
