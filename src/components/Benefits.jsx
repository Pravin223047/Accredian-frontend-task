import React from "react";
import Accordium from "./Accordium";
import CustomPaginationActionsTable from "./CustomPaginationActionsTable";
import {
  Box,
  Button,
  Container,
  Switch,
  Typography,
  styled,
  useTheme,
  Snackbar,
} from "@mui/material";
import { useAuth } from "@clerk/clerk-react";
import ReferPopupModal from "./ReferPopupModal"; // Assuming you have a ReferPopupModal component

const StyledContainer = styled(Container)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 40,
  justifyContent: "space-between",
  padding: "35px 20px",
});

const StyledBoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: 30,
  justifyContent: "start",
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));

const StyledButton = styled(Button)({
  background: "#1B66C9",
  color: "#fff",
  width: "160px",
  height: "50px",
  borderRadius: 5,
  fontSize: 14,
  "&:hover": {
    background: "#5C76F8",
  },
});

const Benefits = () => {
  const theme = useTheme();
  const { isSignedIn } = useAuth();
  const [enrolled, setEnrolled] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleToggle = () => {
    if (isSignedIn) {
      setEnrolled((prevEnrolled) => !prevEnrolled);
    } else {
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleReferClick = () => {
    if (!enrolled) {
      setSnackbarOpen(true);
    } else {
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Please enroll to refer."
      />
      <StyledContainer id="benefits">
        <Typography
          variant="h4"
          sx={{
            fontSize: 24,
            [theme.breakpoints.up("lg")]: {
              fontSize: 34,
            },
          }}
        >
          What Are The <span style={{ color: "blue" }}>Referral Benefits?</span>
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "right",
            gap: 10,
          }}
        >
          {isSignedIn && (
            <>
              <Typography variant="body1">
                {enrolled ? "Enrolled" : "Not Enrolled"}
              </Typography>
              <Switch checked={enrolled} onChange={handleToggle} />
            </>
          )}
          {!isSignedIn && (
            <Typography variant="body1">Please login to enroll.</Typography>
          )}
        </Box>
        <StyledBoxContainer>
          <Accordium />
          <CustomPaginationActionsTable />
        </StyledBoxContainer>
        <StyledButton onClick={handleReferClick}>Refer Now</StyledButton>
      </StyledContainer>
      <ReferPopupModal open={modalOpen} handleClose={handleCloseModal} />
    </>
  );
};

export default Benefits;
