import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import { Details } from "./pages/Details";
import { Layout } from "./Layout/Layout";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
