import React from "react";
import "./user.css";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import PublishIcon from "@mui/icons-material/Publish";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to='/newUser'>
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://yt3.ggpht.com/ytc/AMLnZu8fFJD1dIXS8zOLsNEUqRu7CM-HIhU094MpDHiR=s88-c-k-c0x00ffffff-no-rj-mo"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Jason</span>
              <span className="userShowUserTitle">Developer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentityOutlinedIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Jason</span>
            </div>
            <div className="userShowInfo">
              <CalendarMonthOutlinedIcon className="userShowIcon" />
              <span className="userShowInfoTitle">9.12.2022</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneIphoneOutlinedIcon className="userShowIcon" />
              <span className="userShowInfoTitle">+60 12 123 1234</span>
            </div>
            <div className="userShowInfo">
              <EmailOutlinedIcon className="userShowIcon" />
              <span className="userShowInfoTitle">abc@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <FmdGoodOutlinedIcon className="userShowIcon" />
              <span className="userShowInfoTitle">JB | Msia</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <from className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="jason"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Jason Lim"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="abc@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+60 12 123 1234"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="JB | Msia"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateUpload"
                  src="https://yt3.ggpht.com/ytc/AMLnZu8fFJD1dIXS8zOLsNEUqRu7CM-HIhU094MpDHiR=s88-c-k-c0x00ffffff-no-rj-mo"
                  alt=""
                />
                <label htmlFor="file">
                  <PublishIcon className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </from>
        </div>
      </div>
    </div>
  );
}
