import React from "react";
import "./customer.scss";
import {
  CalendarToday,
  Email,
  PermIdentity,
  Phone,
  Place,
} from "@mui/icons-material";
import "./customer.scss";

const Customer = () => {
  return (
    <>
      <div className="customer">
        <div className="customer__top">
          <img
            src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
            alt=""
          />
          <div className="title">
            <h6>username</h6>
            <p>Software Engineer</p>
          </div>
        </div>
        <div className="customer__details">
          <h6>Account Details</h6>
          <div className="account">
            <PermIdentity />
            <p>annabaker333</p>
          </div>
          <div className="account">
            <CalendarToday />
            <p>12-1-2021</p>
          </div>
          <h6>Contect Details</h6>
          <div className="account">
            <Email />
            <p>email@gmail.com</p>
          </div>
          <div className="account">
            <Phone />
            <p>0300060018</p>
          </div>
          <div className="account">
            <Place />
            <p>daska, sialkot | PK</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
