import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllProfile } from "../actions";
import ApplicationHeading from "./ApplicationHeading";
import profilePhoto from "../logo/profilePic.png";
import swal from "sweetalert";

const MyProfile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addAllProfile());
  }, [dispatch]);

  const { profile } = useSelector((state) => state.main);
  const user1 = profile[1];

  return (
    <div>
      <ApplicationHeading value="My Profile" />
      <div className="userProfile">
        <div className="profilePhoto">
          <img src={profilePhoto} />
        </div>
        <div className="profileInfo">
          <div className="userNameDiv">
            <div>
              <p className="userNameTag">Display Name</p>
              <input
                type="text"
                value={user1.username}
                className="userNameInput"
              />
            </div>
            <div>
              <p className="userNameTag">First Name</p>
              <input
                type="text"
                value={user1.first_name}
                className="userNameInput"
              />
            </div>
            <div>
              <p className="userNameTag">Last Name</p>
              <input
                type="text"
                value={user1.last_name}
                className="userNameInput"
              />
            </div>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <p className="userNameTag">About Yourself</p>
            <p>
              <textarea
                type="textBox"
                value={user1.about}
                className="userAbout"
              />
            </p>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <p className="userNameTag">Your Area of Interest</p>
            <div className="mycheckbox">
              <input type="checkbox" value="designer" />
              <label for="vehicle1"> Designer</label>
              <br />
              <input type="checkbox" value="developer" checked />
              <label for="vehicle2"> Developer</label>
              <br />
              <input type="checkbox" value="manager" />
              <label for="vehicle3"> Project Manager</label>
              <br />
              <input type="checkbox" value="sales" checked />
              <label for="vehicle3"> Sales</label>
            </div>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <p className="userNameTag">Are you a student or Professional</p>
            <div className="myRadio">
              <input type="radio" value="designer" />
              <label for="vehicle1"> Student</label>
              <br />
              <input type="radio" value="developer" checked />
              <label for="vehicle2"> Professional</label>
            </div>
          </div>
          <div>
            <button
              className="saveButton"
              onClick={() => {
                swal("", "Page is under construction!", "error");
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
