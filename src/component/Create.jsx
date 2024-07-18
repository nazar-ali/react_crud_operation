import { Box, Button, Checkbox, Link, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Create = ({
  enrollment,
  setEnrollment,
  name,
  setName,
  age,
  setAge,
  gender,
  setGender,
  check,
  setCheck,
  phone,
  setPhone,
  email,
  setEmail,
  ButtonToggle,
  setButtonToggle,
}) => {

     
  const postData = async (e) => {
    e.preventDefault();
    setButtonToggle(!ButtonToggle);

    try {
      const response = await axios.post(`http://localhost:3000/students`, {
        name,
        age,
        gender,
        email,
        phone,
        enrollment,
        check,
      }).then(() => {
        
      })

      console.log("Data posted successfully:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
    setName("");
    setGender("");
    setEmail("");
    setPhone("");
    setCheck(false);
    setEnrollment("");
    setButtonToggle(true);
    setAge("");
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="flex gap-10 flex-col items-center mt-10">
        <div>
          <TextField
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="outlined-required"
            label="Name"
          />
          <TextField
            id="outlined"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            label="Age"
          />
        </div>
        <div>
          <TextField
            id="outlined"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
            label="gender"
            type="gender"
          />

          <TextField
            id="outlined-email"
            label="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
          />
        </div>
        <div>
          <TextField
            id="outlined"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            label="Phone Number"
            type="text"
          />
          <TextField
            id="outlined"
            value={enrollment}
            onChange={(e) => {
              setEnrollment(e.target.value);
            }}
            label="Enrollment"
          />
          <br></br>
          <div className="flex">
            <Checkbox
              sx={{ left: "auto" }}
              checked={check}
              onChange={() => {
                setCheck(!check);
              }}
              inputProps={{ "aria-label": "controlled" }}
            />
            <p className="mt-2"> I agree to terms and conditons</p>
          </div>
          <div className="flex justify-between mt-3">
            <div>
              <Button
                color={`${ButtonToggle ? "success" : "primary"}`}
                variant="contained"
                onClick={postData}
                type="submit"
              >{`${ButtonToggle ? "Submit" : "done"}`}</Button>
            </div>
            <div>
                <NavLink to='/read'>
              <Button  variant="contained">
                Next
              </Button>
                </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Create;
