import React, { useState } from "react";
import "./MainPage.scss";
import { FiSettings } from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import profile from "../../assets/image/profile.jpg";
import Tooltips from "../../common/ReusableComponent/Tooltips/Tooltips";
import Typical from "react-typical";
import { Link } from "react-scroll";
import { AiOutlineSend } from "react-icons/ai";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// Developer

const steps = [
  "Developer",
  3000,
  "UI/UX Designer",
  3000,
  "React Developer",
  3000,
  "React Native Developer",
  3000,
  "Nodejs Developer",
  3000,
];

const MainPage = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="MainPage_container" id="Home">
      <div className="left_side_container">
        <h1>Hi! I'm Aman Gupta</h1>
        <div>
          <Typical steps={steps} loop={Infinity} wrapper="p" />
        </div>
        <br />
        <p>Designing user interfaces over 2 years</p>
        <p>as a product designer</p>
        <div className="button_container">
          <button className="color_button" onClick={handleClickOpen}>
            Hire Me
          </button>
          {/* <button > */}
          <Link
            className="plain_button"
            activeClass="active"
            to={"Projects"}
            smooth={true}
            duration={800}
            offset={-79}
            spy={true}
          >
            Projects <FiSettings className="project_icon" />
          </Link>
          {/* </button> */}
        </div>
      </div>
      <div className="right_side_container">
        <div className="image_container">
          <Tooltips
            icon={
              <FaReact
                className="icon_rotate_animation"
                size={28}
                color="dodgerblue"
              />
            }
            title={"React Developer"}
            top={100}
            right={130}
          />
          <Tooltips
            icon={<FaNodeJs size={28} color="green" />}
            title={"Nodejs Developer"}
            top={210}
            left={290}
          />
          <img src={profile} alt="profile" />
          <Tooltips
            icon={<SiMongodb size={28} color="green" />}
            title={"Love MongoDB"}
            top={-50}
            right={100}
          />
        </div>
      </div>
      <Dialog open={open}>
        <DialogTitle>Notify Your's Developer ✨</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill the form below to notify me and I will get back to you
            as soon as possible.
            <br />
            Thank you!
          </DialogContentText>
          <div
            style={{
              margin: "15px 0px",
            }}
          >
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="About Your's Expectation"
              type="email"
              fullWidth
              variant="outlined"
              AiOutlineSend
              multiline
              rows={4}
            />
          </div>
        </DialogContent>
        <DialogActions
          style={{
            margin: "0px 20px 10px",
          }}
        >
          <Button
            variant="outlined"
            size="small"
            color="error"
            onClick={handleClose}
            style={{
              textTransform: "capitalize",
            }}
          >
            Cancel
          </Button>
          <Button
            style={{
              textTransform: "capitalize",
            }}
            variant="contained"
            size="small"
            endIcon={<AiOutlineSend />}
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MainPage;
