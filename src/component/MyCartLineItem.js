import React from "react";
import { NavLink } from "react-router-dom";
import deleteLogo from "../logo/delete.svg";
import swal from "sweetalert";

const MyCartLineItem = ({ item }) => {
  console.log(item);
  return (
    <div className="myCartLineItem">
      <div className="courseBox"></div>
      <div className="myCartName">
        <div className="addcartTitle">{item.title}</div>
        <div>{item.author}</div>
      </div>
      <div className="moveWish">
        <NavLink to="/not_found" className="headerFont">
          Move to Wishlist
        </NavLink>
      </div>
      <div className="myCartPrice">Rs {item.actual_price}/-</div>
      <div className="deleteLogo">
        <img
          style={{ marginTop: "10px" }}
          src={deleteLogo}
          onClick={() => {
            swal("", "Unable to delete now!", "error");
          }}
        />
      </div>
    </div>
  );
};

export default MyCartLineItem;
