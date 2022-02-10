import { Routes, Route, Outlet } from "react-router-dom";
import Designer from "./components/designer/Designer";
import NewUser from "./components/newUser/NewUser";
import Loyout from "./Loyout";

import CustomersList from "./pages/customer/CustomersList";
import Designers from "./pages/designers/Designers";
import HomeScreen from "./pages/homeScreen/HomeScreen";
import Invoice from "./pages/invoices/Invoice";
import Products from "./pages/product/Products";
import Reports from "./pages/reports/Reports";
import "./_app.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="admin" element={<Loyout Outlet={Outlet} />}>
          <Route index element={<HomeScreen />} />
          <Route path="customers" element={<CustomersList />} />
          <Route path="customers/invoice/:id" element={<Invoice />} />
          <Route path="newUser" element={<NewUser />} />
          <Route path="reports" element={<Reports />} />
          <Route path="products" element={<Products />} />
          <Route path="designers" element={<Designers />} />
          <Route path="designers/invoice/:id" element={<Designer />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
