import React from "react";
import { Box, Typography, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import jsPDF from 'jspdf';

const OrderDetailsCard = ({orderId, orderDetails}) => {
  console.log(orderDetails);
  const handleDownload = async () => {
    var sum=0;
    var products=[]
    for(var i=0;i<orderDetails.productCartInfo.length;i++){
      sum=sum+orderDetails.productCartInfo[i].discountedPrice;
      products.push({name:orderDetails.productCartInfo[i].title, quantity:orderDetails.productCartInfo[i].quantity,price:orderDetails.productCartInfo[i].discountedPrice})
    }
    const order = {
      date: orderDetails.orderDate,
      orderNumber: orderId,
      customerName: orderDetails.orderAddress.name,
      shippingAddress:`${orderDetails.orderAddress.address}, ${orderDetails.orderAddress.city}, ${orderDetails.orderAddress.state} ${orderDetails.orderAddress.postalCode}`,
      deliveryCharges:(orderDetails.totalAmount-sum),
      products: products,
      totalAmount: orderDetails.totalAmount
    };
  
    const doc = new jsPDF();
  
    
    doc.setFontSize(26);
    doc.text('SHOPIT',80,20);
    // Add title
    doc.setFontSize(18);
    doc.text('Invoice', 20, 30);
  
    // Add order metadata
    doc.setFontSize(12);
    doc.text('Order Date:', 20, 40);
    doc.text(order.date, 80, 40);
  
    doc.text('Order#:', 20, 50);
    doc.text(order.orderNumber, 80, 50);
    doc.text('Customer Name:', 20, 60);
    doc.text(order.customerName, 80, 60);

    const addressLines = doc.splitTextToSize(order.shippingAddress, 110);
    doc.text('Shipping Address:', 20, 70);
    doc.text(addressLines, 80, 70);
  
    // Adjust yPosition to account for multiple address lines
    let yPosition = 80 + (addressLines.length - 1) * 5;
  
    // Add table headers for product details
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('Product', 20, yPosition);
    doc.text('Quantity', 100, yPosition);
    doc.text('Price', 150, yPosition);
  
    let productLines='';
    // Add product details
    doc.setFont(undefined, 'normal');
    
    order.products.forEach(product => {
      yPosition += 10;
      productLines = doc.splitTextToSize(product.name , 60);
      doc.text(productLines, 20, yPosition);
      doc.text(String(product.quantity), 100, yPosition);
      doc.text(String(product.price), 150, yPosition);
      yPosition +=(productLines.length - 1) * 5;  
      
    });
    yPosition += 10;
    doc.text('Delivery Charges:', 20, yPosition);
    doc.text(String(order.deliveryCharges), 150, yPosition );

    yPosition += 10;
    doc.line(20, yPosition, 170, yPosition);

    // Add total amount
    doc.setFontSize(14);
    doc.text('Total Amount:', 20, yPosition + 10);
    doc.text(String(order.totalAmount), 150, yPosition + 10);
  
    // Save the PDF
    doc.save(`invoiceOf_${order.orderNumber}.pdf`);
  };  
  
  console.log("OrderDetails", orderDetails);
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
          {orderDetails.orderDate}
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
          {orderId}
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
          ₹{orderDetails.totalAmount}
        </Typography>
      </Box>
      <div className="flex justify-end">
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          onClick={handleDownload}
          startIcon={<FileDownloadIcon />}
        >
          Download Invoice
        </Button>
      </div>
    </div>
  );
};
export default OrderDetailsCard;
