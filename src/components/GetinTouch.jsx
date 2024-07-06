import React from "react";
import { Box, Button, Container, styled, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const Containers = styled(Container)({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 50,
  justifyContent: "center",
  padding: "35px 20px",
});

const BoxCont = styled(Box)(({ theme }) => ({
  width: "100%",
  borderRadius: 5,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 30,
  [theme.breakpoints.up("sm")]: {
    width: "55%",
  },
}));

const ButtonBlock = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#fff",
  color: "#3B82F6",
  padding: "10px 20px",
  borderRadius: "6px",
  fontSize: 14,
  fontWeight: 600,
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",

  "& > .MuiButton-startIcon": {
    marginRight: "auto",
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: "auto",
      marginRight: 0,
    },
  },
  "&:hover": {
    backgroundColor: "lightgray",
    color: "black",
  },
}));

const AllCont = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  background: "url('/getintouch.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "200px",
  borderRadius: 6,
  padding: "0px 20px",
  gap: 10,
  flexDirection: "column",
  [theme.breakpoints.up("lg")]: {
    gap: 60,
  },
  [theme.breakpoints.up("sm")]: {
    gap: 30,
    flexDirection: "row",
    alignItems: "center",
  },
}));

const ImagContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "5px",
  width: "80px",
  height: "80px",
  borderRadius: "8px",
  backgroundColor: "#609CEB",
  boxShadow: "0px 0px 10px 0px #00000029",
});

const ImagtwoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "5px",
  width: "70px",
  height: "70px",
  borderRadius: "8px",
  backgroundColor: "#fff",
  boxShadow: "0px 0px 10px 0px #00000029",
});

const Typographic = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  width: "100%",
}));

const TypographyicCont = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: 15,
  fontWeight: 400,
  [theme.breakpoints.up("lg")]: {
    fontSize: 18,
  },
}));

const GetinTouch = () => {
  return (
    <Containers id="supports">
      <AllCont>
        <BoxCont>
          <ImagContainer>
            <ImagtwoContainer>
              <SupportAgentIcon sx={{ color: "#1A73E8", fontSize: "60px" }} />
            </ImagtwoContainer>
          </ImagContainer>
          <Typographic>
            <TypographyicCont>
              Want to delve deeper into the program?
            </TypographyicCont>
            <TypographyicCont>
              Share your details to receive expert insights from our program
              team!
            </TypographyicCont>
          </Typographic>
        </BoxCont>
        <ButtonBlock endIcon={<ChevronRightIcon />}>Get In Touch</ButtonBlock>
      </AllCont>
    </Containers>
  );
};

export default GetinTouch;
