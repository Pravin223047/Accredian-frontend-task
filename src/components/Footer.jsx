import React from "react";
import { Box, Button, Link, styled, Typography, useTheme } from "@mui/material";
import FooterAccordium from "./FooterAccordium";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const FooterContainer = styled(Box)(({ theme }) => ({
  background: "#282828",
  padding: "25px 10%",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  gap: 50,
  [theme.breakpoints.up("lg")]: {
    padding: "35px 20%",
    textAlign: "left",
  },
}));

const ImageContainer = styled(Box)({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "2px solid white",
  paddingBottom: 35,
  gap: 10,
  "& > img": {
    width: "180px",
  },
});

const ButtonContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  alignItems: "center",
  justifyContent: "center",
});

const MainContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "none",
  flexDirection: "column",
  gap: 50,
  [theme.breakpoints.up("lg")]: {
    display: "flex",
  },
}));

const ActionsContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  gap: 30,
});

const TypographyContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 12,
  width: "100%",
});

const LinkContainer = styled(Box)({
  width: "400px",
  display: "flex",
  flexDirection: "column",
  gap: 12,
});

const LinkCont = styled(Link)({
  textDecoration: "none",
  color: "#fff",
});

const SocialIconsContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 12,
  cursor: "pointer",
});

const Footer = () => {
  const theme = useTheme();
  return (
    <FooterContainer>
      <MainContainer>
        <ImageContainer>
          <img src="/acredianfooter.png" alt="acredianfooter" />
          <ButtonContainer>
            <Button variant="contained" sx={{ border: "1px solid white" }}>
              Schedule 1-on-1 Call Now
            </Button>
            <Typography fontSize="small">
              Speak with our Learning Advisor
            </Typography>
          </ButtonContainer>
        </ImageContainer>
        <ActionsContainer>
          <FooterAccordium />
          <TypographyContainer>
            <Typography
              variant="h6"
              fontSize="large"
              color="textSecondary"
              sx={{ color: "#fff" }}
            >
              Contact Us
            </Typography>
            {[
              "Email us (For Data Science Queries): admissions@accredian.com",
              "Email us (For Product Management Queries): pm@accredian.com",
              "Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)",
              "Product Management Admission Helpline: +91 9625811095",
              "Enrolled Student Helpline: +91 7969322507",
              "Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015",
            ].map((text, index) => (
              <Typography
                key={index}
                sx={{ color: "#fff" }}
                variant="body1"
                fontSize="14px"
                color="textSecondary"
              >
                {text}
              </Typography>
            ))}
            <Typography variant="h5" color="#fff">
              Why Accredian?
            </Typography>
            <Typography variant="h5" color="#fff">
              Follow Us
            </Typography>
            <SocialIconsContainer>
              <FacebookTwoToneIcon sx={{ fontSize: "24px" }} />
              <LinkedInIcon sx={{ fontSize: "24px" }} />
              <TwitterIcon sx={{ fontSize: "24px" }} />
              <InstagramIcon sx={{ fontSize: "24px" }} />
              <YouTubeIcon sx={{ fontSize: "24px" }} />
            </SocialIconsContainer>
          </TypographyContainer>
          <LinkContainer>
            <Typography variant="h6">Accredian</Typography>
            <LinkCont href="#">About</LinkCont>
            <LinkCont href="#">Career</LinkCont>
            <LinkCont href="#">Blog</LinkCont>
            <LinkCont href="#">Admission Policy</LinkCont>
            <LinkCont href="#">Referral Policy</LinkCont>
            <LinkCont href="#">Privacy Policy</LinkCont>
            <LinkCont href="#">Terms Of Service</LinkCont>
            <LinkCont href="#">Master FAQs</LinkCont>
          </LinkContainer>
        </ActionsContainer>
      </MainContainer>
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontSize: "12px",
            [theme.breakpoints.up("sm")]: {
              fontSize: "14px",
            },
            [theme.breakpoints.up("lg")]: {
              fontSize: "16px",
            },
          }}
        >
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
        </Typography>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
