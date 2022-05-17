import React from "react";
import reactLogo from "../logo/reactLogo.png";

const ApplicationHeading = (props) => {
  return (
    <div className="applicationHeading">
      <div className="headingData">{props.value}</div>
      <div className="headingLogo">
        <img src={reactLogo} alt="Google logo" />
      </div>
    </div>
  );
};

export default ApplicationHeading;
