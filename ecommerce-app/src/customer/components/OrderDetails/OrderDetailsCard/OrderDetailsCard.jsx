import React from "react";
import { Box, Typography, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const OrderDetailsCard = () => {
  return (
    <div
      className="bg-white p-4 rounded-md shadow-md"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <div className="font-bold text-lg mb-1">Order Details</div>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        className="mb-1"
      >
        <Typography variant="body1" className="font-weight: 600">
          Order Date
        </Typography>
        <Typography variant="body1" className="font-weight: 600">
          15-May-2024
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        className="mb-1"
      >
        <Typography variant="body1" className="font-weight: 600">
          Order#
        </Typography>
        <Typography variant="body1" className="font-weight: 600">
          743-627368-4836495
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        className="mb-1"
      >
        <Typography variant="body1" className="font-weight: 600">
          Total Amount
        </Typography>
        <Typography variant="body1" className="font-weight: 600">
          450
        </Typography>
      </Box>
      <div className="flex justify-end">
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<FileDownloadIcon />}
        >
          Download Invoice
        </Button>
      </div>
    </div>
  );
};
export default OrderDetailsCard;
