import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const useForgotPasswordHandler = () => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);

  const sendOtp = async (email, resend) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/sendotp",
        { email: email, resend: resend },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;

      if (!data.success) {
        toast.error(data.message);
      } else {
        setOtp(data.otp);
        toast.success(data.message);
      }
    } catch (error) {
      console.error("Error handling send otp:", error);
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = (enteredOtp) => {
    if (enteredOtp !== "") {
      if (enteredOtp !== otp) {
        toast.error("Invalid OTP");
        console.log("Invalid OTP");
        return false;
      } else {
        return true;
      }
    }
      toast.error("OTP not entered");
      return false;
  };

  const resetPassword = async ({email, newPassword}) => {
    console.log(newPassword)
    try {
      const response = await axios.put(
        "http://localhost:8080/auth/reset/password",
        { email: email, password: newPassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.message === "Password Updated Successfully") {
        const data = response.data;
        console.log(data);
        console.log("password changed successfully");
        toast.success("Password changed!");
        setPasswordChanged(true);
      } else {
        toast.error("Could not reset password");
      }
    } catch (error) {
      console.error("Error reseting password:", error);
    } finally {
      setLoading(false);
    }
  };

  return { sendOtp, loading, otp, verifyOtp, resetPassword, passwordChanged };
};

export default useForgotPasswordHandler;
