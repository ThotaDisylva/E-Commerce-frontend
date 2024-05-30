import React from "react";
import {
  Typography,
  Grid,
  Button,
  FormControlLabel,
  Radio,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

function CheckoutAddressCard({ address, selected, onSelect, onEdit,editable }) {
  return (
    <div className="rounded-lg text-sm md:text-xl w-full mb-2 cursor-pointer" onClick={onSelect} >
      <div
        className="bg-white"
        style={{
          border: "1px solid #ccc",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <div className="w-full">
          <Grid container>
            <div className="w-full">
              <Grid style={{ display: "flex", flexDirection: "column" }}>
                <div className="flex justify-around w-full">
                  <div className="flex sm:space-x-3 items-center w-full">
                    <FormControlLabel
                      className="pl-4"
                      control={<Radio checked={selected} onChange={onSelect} />}
                      id="leftButton"
                      name="buttonPosition"
                    />
                    <div className="font-bold">{address.name}</div>
                    <div className="hidden sm:flex">
                      <p className="font-bold text-green-500 border border-solid w-fit p-2 border-green-500 rounded-3xl text-xs align-middle hover:bg-gray-300">
                        Home
                      </p>
                    </div>
                  </div>
                  {editable && (
                  <div className="px-4 pt-4">
                    <Button
                      className=""
                      variant="outlined"
                      style={{ fontSize: "12px" }}
                      onClick={() => onEdit(address)}
                    >
                      <EditIcon
                        style={{ color: "#1976D2", fontSize: "12px" }}
                      />
                      Edit
                    </Button>
                  </div>
                  )}
                </div>
                <div className="pl-4 pr-4 text-gray-500">
                  <Typography style={{ textAlign: "left", marginTop: "7px" }}>
                    {address.address}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ textAlign: "left", marginBottom: "8px" }}
                  >
                    {address.city}, {address.state} - {address.postalCode}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ textAlign: "left", marginBottom: "8px" }}
                  >
                    {address.phoneNumber}
                  </Typography>
                  <p className="font-bold text-green-500 border border-solid w-fit p-2 border-green-500 rounded-3xl text-xs mb-2 sm:hidden hover:bg-gray-30">
                    Home
                  </p>
                </div>
              </Grid>
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default CheckoutAddressCard;
