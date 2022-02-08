import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./invoiceDetail.scss";

const InvoiceDetails = () => {
  //   const [invoice, setInvoice] = useState();

  useEffect(() => {}, []);

  return (
    <div className="invoiceDetail">
      <div className="invoiceDetail__product">
        <div className="invoiceDetail__product__item">
          <h4>Product Name:</h4>
          <h6>flex printer</h6>
        </div>
        <div className="invoiceDetail__product__item">
          <p>Purchase Date</p>
          <p>02-10-2022</p>
        </div>
        <div className="invoiceDetail__product__item">
          <p>Total Aamount</p>
          <p className="statue">
            <span>Rs:</span> 12035
          </p>
        </div>
        <div className="invoiceDetail__product__item">
          <p>Previous amount</p>
          <p className="statue">
            <span>Rs:</span> 2254
          </p>
        </div>
        <div className="invoiceDetail__product__item">
          <p>advance paid</p>
          <p className="statue">
            <span>Rs:</span> 4000
          </p>
        </div>
        <div className="invoiceDetail__product__item">
          <p>Final amount</p>
          <p className="statue">
            <span>Rs:</span> 987000
          </p>
        </div>

        <Button
          className="invoiceUpdate"
          color="success"
          variant="contained"
          size="small"
        >
          Update Invoice
        </Button>
      </div>
      <div className="invoiceDetail__product">
        <div className="invoiceDetail__product__item">
          <h4>Product Name:</h4>
          <h6>flex printer</h6>
        </div>
        <div className="invoiceDetail__product__item">
          <p>Purchase Date</p>
          <p>02-10-2022</p>
        </div>
        <div className="invoiceDetail__product__item">
          <p>Total Aamount</p>
          <p className="statue">
            <span>Rs:</span> 12035
          </p>
        </div>
        <div className="invoiceDetail__product__item">
          <p>Previous amount</p>
          <p className="statue">
            <span>Rs:</span> 2254
          </p>
        </div>
        <div className="invoiceDetail__product__item">
          <p>advance paid</p>
          <p className="statue">
            <span>Rs:</span> 4000
          </p>
        </div>
        <div className="invoiceDetail__product__item">
          <p>Final amount</p>
          <p className="statue">
            <span>Rs:</span> 987000
          </p>
        </div>

        <Button
          className="invoiceUpdate"
          color="success"
          variant="contained"
          size="small"
        >
          Update Invoice
        </Button>
      </div>
    </div>
  );
};

export default InvoiceDetails;
