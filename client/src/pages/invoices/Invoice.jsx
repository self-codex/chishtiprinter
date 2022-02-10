import { Button } from "@mui/material";
import React from "react";
import Customer from "../../components/customer/Customer";
import AddInvoice from "../../components/invoice/AddInvoice";
import InvoiceDetails from "../../components/invoice/InvoiceDetails";
import { Link } from "react-router-dom";
import "./invoice.scss";

const Invoice = () => {
  return (
    <>
      <div className="invoice">
        <div className="invoice__title">
          <h2>user Invoice</h2>
          <Link to="/admin/newUser">
            <Button className="addUserBtn" color="primary" variant="contained">
              Add New User
            </Button>
          </Link>
        </div>

        <div className="invoice__user">
          <Customer />
          <AddInvoice />
        </div>
      </div>
      <div className="invoice__details">
        <InvoiceDetails />
      </div>
    </>
  );
};

export default Invoice;
