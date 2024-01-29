import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Index";
import Customer from "../pages/Customer";
import Dashboard from "../pages/dashboard/Index";
import Clients from "../pages/clients/Index";
import Invoices from "../pages/invoices/Index";
const Routers = () => {

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard/>
              </Layout>
            }
          />
          <Route
            path="/clients"
            element={
              <Layout>
                <Clients />
              </Layout>
            }
          />
           <Route
            path="/invoices"
            element={
              <Layout>
                <Invoices/>
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
