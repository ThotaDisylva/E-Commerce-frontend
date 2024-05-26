import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import statesAndUTs from "./states&utdata";
import "./AddAddressCard.css";

const EditAddressCard = ({ address, onClose, onSave }) => {
  const [name, setName] = useState(address.name);
  const [phoneNo, setPhoneNo] = useState(address.phoneNo);
  const [addressline1, setAddressline1] = useState(address.addressline1);
  const [landmark, setLandmark] = useState(address.landmark || '');
  const [city, setCity] = useState(address.city);
  const [state, setState] = useState(address.state);
  const [pincode, setPincode] = useState(address.pincode);
  const [addressType, setAddressType] = useState(address.type);

  const handleSave = () => {
    // Handle saving the edited address here
    const updatedAddress = {
      name,
      phoneNo,
      addressline1,
      landmark,
      city,
      state,
      pincode,
      type: addressType,
    };
    onSave(updatedAddress);
    onClose();
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleTypeChange = (type) => {
    setAddressType(type);
  };

  const isNumber = (event) => {
    return /\d/.test(String.fromCharCode(event.keyCode));
  };

  return (
    <div className="address-container wrapper w-full h-42 overflow-y-scroll no-scrollbar">
      <ClearIcon
        onClick={onClose}
        style={{
          position: "absolute",
          top: "15px",
          right: "10px",
          cursor: "pointer",
        }}
      />
      <div className="header">
        <Typography
          style={{
            fontWeight: "bold",
            marginBottom: "10px",
            textAlign: "left",
            overflow: "hidden",
          }}
        >
          Edit Address
        </Typography>
      </div>
      <Divider />
      <div className="input-row">
        <Typography
          style={{
            color: "#313131",
            fontSize: "15px",
            marginRight: "20px",
            fontWeight: "bold",
          }}
        >
          Contact Details
        </Typography>
      </div>
      <div className="input">
        <TextField
          label="*Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          fullWidth
        />
      </div>
      <div className="input">
        <TextField
          label="*Enter 10 digit number"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          variant="outlined"
          fullWidth
          autoComplete="off"
          onPaste={(e) => e.preventDefault()}
          maxLength="10"
          onKeyPress={(e) => isNumber(e)}
        />
      </div>
      <div className="input-row">
        <Typography
          style={{
            color: "#313131",
            fontSize: "15px",
            marginRight: "20px",
            fontWeight: "bold",
          }}
        >
          Address
        </Typography>
      </div>
      <div className="input">
        <TextField
          label="*Address Line 1"
          value={addressline1}
          onChange={(e) => setAddressline1(e.target.value)}
          variant="outlined"
          fullWidth
        />
      </div>
      {/* <div className="input">
        <TextField
          label="Landmark"
          value={landmark}
          onChange={(e) => setLandmark(e.target.value)}
          variant="outlined"
          fullWidth
        />
      </div> */}
      <div className="input">
        <TextField
          label="*City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          variant="outlined"
          fullWidth
        />
      </div>
      <div className="input grid-cols-2 flex space-x-3">
        <TextField
          className="col-span-1 w-2/5"
          label="*Pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          variant="outlined"
          autoComplete="off"
          onPaste={(e) => e.preventDefault()}
          maxLength="6"
          onKeyPress={(e) => isNumber(e)}
        />
        <FormControl className="col-span-1 w-3/5">
          <InputLabel id="state-label">State</InputLabel>
          <Select
            labelId="state-label"
            id="state-select"
            value={state}
            label="State"
            onChange={handleStateChange}
          >
            {statesAndUTs.map((stateName, index) => (
              <MenuItem key={index} value={stateName}>
                {stateName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="save-address">
        <Typography
          style={{ fontWeight: "bold", fontSize: "15px", marginBottom: "5px" }}
        >
          Save Address as
        </Typography>
        <Button
          variant="contained"
          style={{
            borderRadius: "40px",
            fontSize: "10px",
            marginRight: "10px",
            backgroundColor: addressType === "Home" ? "green" : "#ccc",
            borderColor: addressType === "Home" ? "green" : "#ccc",
            color: addressType === "Home" ? "white" : "initial",
          }}
          onClick={() => handleTypeChange("Home")}
        >
          Home
        </Button>
        <Button
          variant="contained"
          style={{
            borderRadius: "40px",
            fontSize: "10px",
            backgroundColor: addressType === "Work" ? "green" : "#ccc",
            borderColor: addressType === "Work" ? "green" : "#ccc",
            color: addressType === "Work" ? "white" : "initial",
          }}
          onClick={() => handleTypeChange("Work")}
        >
          Work
        </Button>
      </div>
      <div className="input-row">
        <Button
          variant="contained"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            padding: "8px 16px",
            borderRadius: "5px",
            border: "none",
            width: "100%",
            marginTop: "5px",
          }}
          onClick={handleSave}
        >
          Save Address
        </Button>
      </div>
    </div>
  );
};

export default EditAddressCard;
