import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  styled,
  Link as MuiLink,
  Snackbar,
} from "@mui/material";
import ReferPopupModal from "./ReferPopupModal";
import { useAuth } from "@clerk/clerk-react";

const ContainerBox = styled(Container)({
  maxWidth: "100%",
  height: "calc(80vh - 74px)",
  padding: "15px 0px",
  display: "flex",
  gap: 25,
  flexDirection: "column",
  alignItems: "center",
});

const LinkContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  gap: 10,
  background: "#DDEAFC",
  width: "80%",
  borderRadius: 6,
  height: 50,
  padding: "2px 15px",
  [theme.breakpoints.up("md")]: {
    width: "50%",
  },
  "& > a": {
    textDecoration: "none",
    color: "#000",
    fontSize: 18,
    transition: "all 0.5s ease",
    cursor: "pointer",
    "&:hover": {
      color: "blue",
      fontSize: 19,
    },
  },
}));

const MainContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "80%",
  height: "80%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 15,
  backgroundColor: "#DDEAFC",
  backgroundImage: "url('/Moneybackground.png')",
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderRadius: 6,
  [theme.breakpoints.up("sm")]: {
    width: "100%",
  },
}));

const ImageCont = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "none",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
  "& > img": {
    width: "100%",
    objectFit: "contain",
    [theme.breakpoints.up("md")]: {
      objectFit: "cover",
    },
  },
}));

const TextContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: " 0px 35px",
  alignItems: "start",
  justifyContent: "space-between",
  gap: 10,
  [theme.breakpoints.up("lg")]: {
    width: "70%",
  },
}));

const TypographyContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  gap: 20,
  [theme.breakpoints.up("sm")]: {
    alignItems: "start",
    justifyContent: "center",
    textAlign: "left",
  },
  "& > #firsttypography": {
    fontSize: 35,
    fontWeight: 600,
    [theme.breakpoints.up("lg")]: {
      fontSize: 55,
      fontWeight: 800,
    },
  },
}));

const TypographyText = styled(Typography)(({ theme }) => ({
  fontSize: 25,
  fontWeight: 400,
  [theme.breakpoints.up("lg")]: {
    "& > span": {
      fontSize: 40,
      fontWeight: 600,
      color: "blue",
    },
  },
}));

const ButtonCont = styled(Button)({
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

const Hero = () => {
  const { isSignedIn } = useAuth();
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleOpen = () => {
    if (isSignedIn) {
      setOpen(true);
    } else {
      setSnackbarOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSnackbarOpen(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Please login to refer."
      />
      <ContainerBox sx={{ marginTop: "148px" }}>
        <LinkContainer sx={{ boxShadow: 3 }}>
          <MuiLink href="#refer">Refer</MuiLink>
          <MuiLink href="#benefits">Benefits</MuiLink>
          <MuiLink href="#faqs">FAQs</MuiLink>
          <MuiLink href="#supports">Supports</MuiLink>
        </LinkContainer>
        <MainContainer sx={{ boxShadow: 4 }}>
          <TextContainer>
            <TypographyContainer>
              <TypographyText variant="h1" id="firsttypography">
                Let’s Learn & Earn
              </TypographyText>
              <TypographyText>
                Get a chance to win up-to{" "}
                <span
                  style={{
                    fontSize: 30,
                    fontWeight: 500,
                    color: "blue",
                  }}
                >
                  Rs. 15,000
                </span>
              </TypographyText>
              <ButtonCont
                variant="contained"
                color="primary"
                onClick={handleOpen}
                // disabled={!isSignedIn}
              >
                Refer Now
              </ButtonCont>
            </TypographyContainer>
          </TextContainer>
          <ImageCont>
            <img src="/heroimg.png" alt="heroimg" />
          </ImageCont>
        </MainContainer>
        <ReferPopupModal open={open} handleClose={handleClose} />
      </ContainerBox>
    </>
  );
};

export default Hero;
