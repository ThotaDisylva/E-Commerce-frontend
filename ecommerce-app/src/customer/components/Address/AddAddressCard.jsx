import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import "./Address.css";
import statesAndUTs from "./states&utdata";
const AddAddressCard = () => {
  const [selectedState, setSelectedState] = useState('');

  const handleChange = (event) => {
    setSelectedState(event.target.value);
  };
  const isNumber = (event) => {
    return /\d/.test(String.fromCharCode(event.keyCode));
  };
  const validateAddress = (type) => {};
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  const [homeActive, setHomeActive] = useState(false);
  const [companyActive, setCompanyActive] = useState(false);
  const handleHomeButtonClick = () => {
    setHomeActive(!homeActive);
    setCompanyActive(false); // Reset company button state
  };
  const handleCompanyButtonClick = () => {
    setCompanyActive(!companyActive);
    setHomeActive(false); // Reset home button state
  };
  return (
    <div className="address-container">
      <ClearIcon
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
            className: "form-heading",
            textAlign: "left",
          }}
        >
          Add New Address
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
        <TextField label="*Name" id="add_name" variant="outlined" fullWidth />
      </div>
      <div className="input">
        <TextField
          label="*Enter 10 digit number"
          id="add_phone"
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
          id="add_line1"
          variant="outlined"
          fullWidth
        />
      </div>
      <div className="input">
        <TextField
          label="Landmark"
          id="add_land"
          variant="outlined"
          fullWidth
        />
      </div>
      <div className="input">
        <TextField label="*City" id="add_city" variant="outlined" fullWidth />
      </div>
      <div className="input grid-cols-2 flex space-x-3">
        <TextField
          className="col-span-1 w-2/5"
          label="*Pincode"
          id="add_pin"
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
        value={selectedState}
        label="State"
        onChange={handleChange}
      >
        {statesAndUTs.map((state, index) => (
          <MenuItem key={index} value={state}>
            {state}
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
            backgroundColor: homeActive ? "green" : "#ccc",
            borderColor: homeActive ? "green" : "#ccc",
            color: homeActive ? "white" : "initial",
          }}
          onClick={handleHomeButtonClick}
        >
          Home
        </Button>
        <Button
          variant="contained"
          style={{
            borderRadius: "40px",
            fontSize: "10px",
            backgroundColor: companyActive ? "green" : "#ccc",
            borderColor: companyActive ? "green" : "#ccc",
            color: companyActive ? "white" : "initial",
          }}
          onClick={handleCompanyButtonClick}
        >
          Work
        </Button>
        <input type="hidden" value="Home" id="addType" />
        <input type="hidden" value="Company" id="address_id" />
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
        >
          Add Address
        </Button>
      </div>
    </div>
  );
};
export default AddAddressCard;
