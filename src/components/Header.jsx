import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Link,
  Button,
  Typography,
  Snackbar,
  useTheme,
  createTheme,
} from "@mui/material";
import { UserButton, useAuth, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const themes = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      mdd: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "#F5F5F5",
  boxShadow: "none",
  height: 74,
  padding: "5px",
  [theme.breakpoints.up("sm")]: {
    padding: "15px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "5px 5%",
  },
}));

const OptionWrapper = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  gap: 28,
});

const ImageWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  gap: 20,
  "& > img": { width: 80, marginLeft: 15 },
  "& > #courses": { display: "none" },
  "& >.css-hyum1k-MuiToolbar-root": {
    padding: 0,
  },
  [theme.breakpoints.up("sm")]: {
    "& > #courses": { display: "flex" },
    "& > img": { width: 110 },
    "& >.css-hyum1k-MuiToolbar-root": {
      padding: "16px",
    },
    gap: 28,
  },
}));

const LinkWrapper = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: 28,
  [theme.breakpoints.up("lg")]: {
    display: "flex",
  },
  justifyContent: "center",
  "& > a": {
    textDecoration: "none",
    color: "black",
    cursor: "pointer",
  },
}));

const ButtonsWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 28,
  "& > #login": {
    background: "#EAEDF1",
    color: "#000",
    "&:hover": {
      background: "#C0C0C0",
    },
  },
});

const ButtonCont = styled(Button)({
  background: "#1B66C9",
  color: "#fff",
  borderRadius: 5,
  fontSize: 10,
  [themes.breakpoints.up("mdd")]: {
    fontSize: 12,
    width: "fit-content",
  },
  "&:hover": {
    background: "#5C76F8",
  },
});

const Header = () => {
  const theme = useTheme();
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const navigate = useNavigate();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    navigate("/sign-in");
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const sendUserDataToBackend = async () => {
    if (isSignedIn) {
      try {
        const response = await axios.post(
          "https://accredian-backend-task-x0f4.onrender.com/api/users",
          {
            email: user.primaryEmailAddress.emailAddress,
            firstName: user.firstName,
            lastName: user.lastName,
          }
        );
        setSuccessMessage("User data sent successfully!");
        setSnackbarOpen(true);
        return response.data;
      } catch (error) {
        console.error("Error sending user data to backend:", error);
        setErrorMessage("Failed to send user data.");
        setSnackbarOpen(true);
      }
    }
  };

  React.useEffect(() => {
    sendUserDataToBackend();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignedIn, user]);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={successMessage || errorMessage}
      />
      <StyledAppBar
        position="fixed"
        sx={{
          background: "#DDEAFC",
          display: "flex",
          justifyContent: "space-between",
          zIndex: 20,
          [theme.breakpoints.up("lg")]: {
            justifyContent: "center",
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 5,
            [theme.breakpoints.up("lg")]: {
              justifyContent: "center",
            },
          }}
        >
          <Typography
            sx={{
              color: "#000",
              fontSize: ".8rem",
              [theme.breakpoints.up("sm")]: {
                fontSize: "1rem",
              },
            }}
            fontSize="sm"
          >
            Navigate your ideal career path with tailored expert advice
          </Typography>
          <ButtonCont
            sx={{
              width: "300px",
              [theme.breakpoints.up("sm")]: {
                width: "fit-content",
              },
            }}
          >
            Contact Expert
          </ButtonCont>
        </Toolbar>
      </StyledAppBar>
      <StyledAppBar position="fixed" sx={{ zIndex: 20, marginTop: "74px" }}>
        <Toolbar>
          <ImageWrapper>
            <img src="https://accredian.com/Rcimages/logo.png" alt="logo" />
            <ButtonCont id="courses">Courses</ButtonCont>
          </ImageWrapper>

          <OptionWrapper>
            <LinkWrapper>
              <Link href="#refer">Refer & Earn</Link>
              <Link href="#benefits">Resources</Link>
              <Link href="https://accredian.com/About">About Us</Link>
            </LinkWrapper>
            <ButtonsWrapper>
              {isSignedIn ? (
                <UserButton />
              ) : (
                <>
                  <ButtonCont id="login" onClick={() => handleLogin()}>
                    Login
                  </ButtonCont>
                  <ButtonCont
                    sx={{
                      display: "none",
                      [theme.breakpoints.up("sm")]: {
                        display: "inline-flex",
                      },
                    }}
                  >
                    Try For Free
                  </ButtonCont>
                </>
              )}
            </ButtonsWrapper>
          </OptionWrapper>
        </Toolbar>
      </StyledAppBar>
    </>
  );
};

export default Header;
