import { Routes, Route, Outlet } from "react-router-dom";
import NewUser from "./components/newUser/NewUser";
import Loyout from "./Loyout";

import CustomersList from "./pages/customer/CustomersList";
import HomeScreen from "./pages/homeScreen/HomeScreen";
import Invoice from "./pages/invoices/Invoice";
import "./_app.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loyout Outlet={Outlet} />}>
          <Route index element={<HomeScreen />} />
          <Route path="customers" element={<CustomersList />} />
          <Route path="invoice/:id" element={<Invoice />} />
          <Route path="newUser" element={<NewUser />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
