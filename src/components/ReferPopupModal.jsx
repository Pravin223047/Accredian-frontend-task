import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  styled,
  Snackbar,
  useTheme,
} from "@mui/material";
import axios from "axios";

const BodyContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 2,
  padding: 20,
  backgroundColor: "white",
  borderRadius: 8,
  width: "80%",
  [theme.breakpoints.up("sm")]: {
    width: "500px",
    padding: 32,
  },
  [theme.breakpoints.up("md")]: {
    width: "600px",
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  padding: "8px",
  borderRadius: 6,
  alignItems: "center",
  justifyContent: "center",
  "&>img": {
    width: "70%",
    height: "100%",
    borderRadius: 6,
    objectFit: "cover",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      display: "flex",
    },
  },
}));

const TextFieldContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  gap: 4,
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    gap: 12,
  },
}));

const ButtonArea = styled(Button)({
  height: 40,
  marginTop: 15,
  width: "150px",
  borderRadius: 6,
  display: "inline",
});

const ReferPopupModal = ({ open, handleClose }) => {
  const [referrerName, setReferrerName] = useState("");
  const [referrerEmail, setReferrerEmail] = useState("");
  const [refereeName, setRefereeName] = useState("");
  const [refereeEmail, setRefereeEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleSubmit = async () => {
    // Clear previous messages
    setErrorMessage("");
    setSuccessMessage("");

    // Simple validation
    if (!referrerName || !referrerEmail || !refereeName || !refereeEmail) {
      setErrorMessage("All fields are required.");
      setSnackbarOpen(true);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(referrerEmail) || !emailRegex.test(refereeEmail)) {
      setErrorMessage("Please enter valid email addresses.");
      setSnackbarOpen(true);
      return;
    }

    try {
      // Simulating API call
      await axios.post(
        "https://accredian-backend-task-x0f4.onrender.com/api/referrals",
        {
          referrerName,
          referrerEmail,
          refereeName,
          refereeEmail,
        }
      );

      // Reset form fields
      setReferrerName("");
      setReferrerEmail("");
      setRefereeName("");
      setRefereeEmail("");
      setSuccessMessage("Referral submitted successfully.");
      setSnackbarOpen(true);

      // Close modal after 3 seconds
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error) {
      setErrorMessage(
        error.response
          ? error.response.data.error
          : "Failed to submit referral."
      );
      setSnackbarOpen(true);
    }
  };

  const theme = useTheme();

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={successMessage || errorMessage}
      />
      <Modal open={open} onClose={handleClose}>
        <BodyContainer
          sx={{
            mx: "auto",
            my: "3vh",
            [theme.breakpoints.up("sm")]: {
              mx: "auto",
              my: "5vh",
            },
          }}
        >
          <ImageContainer>
            <img src="/learnandreferimg.jpeg" alt="learnandreferimg" />
          </ImageContainer>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: errorMessage ? "red" : "blue", alignSelf: "center" }}
          >
            {errorMessage || "Refer a Friend & Get Rs.200 Discount!"}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Your Name and Email Address
          </Typography>
          <TextFieldContainer>
            <TextField
              label="Your Name"
              variant="outlined"
              margin="normal"
              fullWidth
              height="20px"
              value={referrerName}
              onChange={(e) => setReferrerName(e.target.value)}
            />
            <TextField
              label="Your Email"
              variant="outlined"
              margin="normal"
              fullWidth
              value={referrerEmail}
              onChange={(e) => setReferrerEmail(e.target.value)}
            />
          </TextFieldContainer>
          <Typography variant="body1" gutterBottom sx={{ marginTop: "10px" }}>
            Friend's Name and Email Address
          </Typography>
          <TextFieldContainer>
            <TextField
              label="Friend's Name"
              variant="outlined"
              margin="normal"
              fullWidth
              value={refereeName}
              onChange={(e) => setRefereeName(e.target.value)}
            />
            <TextField
              label="Friend's Email"
              variant="outlined"
              margin="normal"
              fullWidth
              value={refereeEmail}
              onChange={(e) => setRefereeEmail(e.target.value)}
            />
          </TextFieldContainer>
          <TextFieldContainer>
            <ButtonArea
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
            >
              Submit
            </ButtonArea>
            <Typography variant="body1" gutterBottom sx={{ marginTop: "14px" }}>
              Refer to a friend and earn some amazing price!!!
            </Typography>
          </TextFieldContainer>
        </BodyContainer>
      </Modal>
    </div>
  );
};

export default ReferPopupModal;
