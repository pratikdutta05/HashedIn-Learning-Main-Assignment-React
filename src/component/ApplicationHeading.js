import React from "react";
import reactLogo from "../logo/reactLogo.png";

const ApplicationHeading = () => {
  return (
    <div className="applicationHeading">
      <div className="headingData">Discover Latest Courses on React</div>
      <div className="headingLogo">
        <img src={reactLogo} alt="Google logo" />
      </div>
    </div>
  );
};

export default ApplicationHeading;
