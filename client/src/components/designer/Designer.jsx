import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import Customer from "../customer/Customer";
import InvoiceDetails from "../invoice/InvoiceDetails";
import "./designer.scss";

const Designer = () => {
  const [flex, setFlex] = useState({
    chooseFlex: "",
    flexWidth: "",
    flexHeight: "",
    flexSize: "",
    flexRate: "",
    flexQTY: "",
    flexDesign: "",
    flexMaterial: "",
    total: "",
    flexDesigner: "",
    flexDate: "",
    flexFinalBalance: "",
    flexAdvancePaid: "",
    flexPreviousBalance: "",
  });

  const handleInputOnchange = (e) => {
    const { name, value } = e.target;

    setFlex({ ...flex, [name]: value });
  };

  const submitInvoice = (e) => {
    e.preventDefault();
    console.log(flex);
    setTimeout(() => {
      setFlex({
        chooseFlex: "",
        flexWidth: "",
        flexHeight: "",
        flexSize: "",
        flexRate: "",
        flexQTY: "",
        flexDesign: "",
        flexMaterial: "",
        total: "",
        flexDesigner: "",
        flexDate: "",
        flexFinalBalance: "",
        flexAdvancePaid: "",
        flexPreviousBalance: "",
      });
    }, 1000);
  };

  return (
    <>
      <div className="designer">
        <Customer />
        <div className="designer__invoice">
          {/* transaction start */}
          <h4>Add Designer Invoice</h4>
          <p>Product</p>
          <div className="designer__invoice__transaction">
            {/* form detail  */}
            <form onSubmit={submitInvoice} className="add__transaction">
              {/* select input field  */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Choose Flex
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="chooseFlex"
                  value={flex.chooseFlex}
                  label="Choose Flex"
                  onChange={handleInputOnchange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <div className="product__details">
                <div className="inputLabel">
                  <label>
                    Width<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="flexWidth"
                    value={flex.flexWidth}
                    onChange={handleInputOnchange}
                  />
                </div>
                <div className="inputLabel">
                  <label>
                    height<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="flexHeight"
                    value={flex.flexHeight}
                    onChange={handleInputOnchange}
                  />
                </div>
                <div className="inputLabel">
                  <label>
                    size<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="flexSize"
                    value={flex.flexSize}
                    onChange={handleInputOnchange}
                  />
                </div>
              </div>
              <div className="product__details">
                <div className="inputLabel">
                  <label>
                    Rate<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="flexRate"
                    value={flex.flexRate}
                    onChange={handleInputOnchange}
                  />
                </div>
                <div className="inputLabel">
                  <label>
                    QTY<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="flexQTY"
                    value={flex.flexQTY}
                    onChange={handleInputOnchange}
                  />
                </div>
                <div className="inputLabel">
                  <label>
                    design<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="flexDesign"
                    value={flex.flexDesign}
                    onChange={handleInputOnchange}
                  />
                </div>
              </div>
              <div className="product__details">
                <div className="inputLabel">
                  <label>
                    material<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="flexMaterial"
                    value={flex.flexMaterial}
                    onChange={handleInputOnchange}
                  />
                </div>
                <div className="inputLabel">
                  <label>
                    Date<span>*</span>
                  </label>
                  <input
                    type="date"
                    name="flexDate"
                    value={flex.flexDate}
                    onChange={handleInputOnchange}
                  />
                </div>
                <div className="inputLabel">
                  <label>
                    Total RS:<span>*</span>
                  </label>
                  <input
                    type="number"
                    name="total"
                    value={flex.total}
                    onChange={handleInputOnchange}
                  />
                </div>
              </div>
              {/* 4 row */}
              <div className="product__details">
                <div className="inputLabel">
                  <label>Previous Balance</label>
                  <input
                    type="number"
                    name="flexPreviousBalance"
                    value={flex.flexPreviousBalance}
                    onChange={handleInputOnchange}
                  />
                </div>
                <div className="inputLabel">
                  <label>Advance Paid</label>
                  <input
                    type="number"
                    name="flexAdvancePaid"
                    value={flex.flexAdvancePaid}
                    onChange={handleInputOnchange}
                  />
                </div>
                <div className="inputLabel">
                  <label>
                    Final Balance<span>*</span>
                  </label>
                  <input
                    type="number"
                    name="flexFinalBalance"
                    value={flex.flexFinalBalance}
                    onChange={handleInputOnchange}
                  />
                </div>
              </div>

              {/* select input field  */}
              <FormControl fullWidth className="designer__select">
                <InputLabel id="demo-simple-select-label">
                  Designer Name
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="flexDesigner"
                  value={flex.flexDesigner}
                  label="Choose Flex"
                  onChange={handleInputOnchange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <div className="product__btn">
                <Button type="submit" className="addBtn" variant="contained">
                  ADD invoice
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <InvoiceDetails />
    </>
  );
};

export default Designer;
