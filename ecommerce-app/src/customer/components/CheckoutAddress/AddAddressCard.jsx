import React, { useState } from "react";
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
import "./AddAddressCard.css";
import statesAndUTs from "./states&utdata";

const AddAddressCard = ({ handleClose }) => {
  const [selectedState, setSelectedState] = useState('');
  const [homeActive, setHomeActive] = useState(false);
  const [companyActive, setCompanyActive] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    addressLine1: '',
    city: '',
    pincode: '',
    state: '',
  });

  const isNumber = (event) => {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleHomeButtonClick = () => {
    setHomeActive(!homeActive);
    setCompanyActive(false);
  };

  const handleCompanyButtonClick = () => {
    setCompanyActive(!companyActive);
    setHomeActive(false);
  };

  const handleSubmit = () => {
    // Perform validation before submitting
    const requiredFields = ["name", "phone", "addressLine1", "city", "pincode", "state"];
    for (let field of requiredFields) {
      if (!formValues[field]) {
        alert("Please fill in all required fields.");
        return;
      }
    }
    console.log("Form submitted", formValues);
    handleClose();
  };

  return (
    <div className="address-container wrapper w-full h-42 overflow-y-scroll no-scrollbar z-0">
      <ClearIcon
        onClick={handleClose}
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
        <TextField
          label="Name"
          id="name"
          variant="outlined"
          fullWidth
          required
          value={formValues.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="input">
        <TextField
          label="Enter 10 digit number"
          id="phone"
          variant="outlined"
          fullWidth
          required
          value={formValues.phone}
          onChange={handleInputChange}
          autoComplete="off"
          inputProps={{ maxLength: 10 }}
          onKeyPress={isNumber}
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
          label="Address Line 1"
          id="addressLine1"
          variant="outlined"
          fullWidth
          required
          value={formValues.addressLine1}
          onChange={handleInputChange}
        />
      </div>
      {/* <div className="input">
        <TextField
          label="Landmark"
          id="landmark"
          variant="outlined"
          fullWidth
          value={formValues.landmark}
          onChange={handleInputChange}
        />
      </div> */}
      <div className="input">
        <TextField
          label="City"
          id="city"
          variant="outlined"
          fullWidth
          required
          value={formValues.city}
          onChange={handleInputChange}
        />
      </div>
      <div className="input grid-cols-2 flex space-x-3">
        <TextField
          className="col-span-1 w-2/5"
          label="Pincode"
          id="pincode"
          variant="outlined"
          required
          autoComplete="off"
          inputProps={{ maxLength: 6 }}
          value={formValues.pincode}
          onChange={handleInputChange}
          onKeyPress={isNumber}
        />
        <FormControl className="col-span-1 w-3/5" required>
          <InputLabel id="state-label">State</InputLabel>
          <Select
            labelId="state-label"
            id="state"
            value={selectedState}
            label="State"
            onChange={(e) => {
              setSelectedState(e.target.value);
              handleInputChange(e);
            }}
            required
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
          onClick={handleSubmit}
        >
          Add Address
        </Button>
      </div>
    </div>
  );
};

export default AddAddressCard;
