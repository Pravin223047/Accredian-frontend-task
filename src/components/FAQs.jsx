import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  styled,
  Typography,
  useTheme,
} from "@mui/material";

const StyledContainer = styled(Container)({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 50,
  justifyContent: "center",
  padding: "35px 20px",
});

const StyledButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 14,
  [theme.breakpoints.up("sm")]: {
    flexDirection: "column",
  },
}));

const StyledBoxContainer = styled(Box)({
  width: "100%",
  minHeight: "125px",
  padding: "12px",
  borderRadius: 5,
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

const StyledButton = styled(Button)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  width: "110px",
  height: "40px",
  border: "1px solid black",
  "&:hover": {
    backgroundColor: "lightgray",
    color: "black",
  },
  [theme.breakpoints.up("sm")]: {
    width: "160px",
    height: "40px",
  },
}));

const StyledAllContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  gap: 20,
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    gap: 80,
  },
}));

const FAQs = () => {
  const [selectedFAQ, setSelectedFAQ] = useState(1);
  const theme = useTheme();

  const faqContent = {
    1: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aperiam laborum aut nostrum expedita iure quidem, iusto corporis odit earum!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aperiam laborum aut nostrum expedita iure quidem, iusto corporis odit earum!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aperiam laborum aut nostrum expedita iure quidem, iusto corporis odit earum!",
    ],
    2: [
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    3: [
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    ],
  };

  return (
    <StyledContainer id="faqs">
      <Typography
        variant="h4"
        sx={{
          fontSize: "24px",
          [theme.breakpoints.up("lg")]: {
            fontSize: "34px",
          },
        }}
      >
        Frequently Asked <span style={{ color: "blue" }}>Questions</span>
      </Typography>
      <StyledAllContainer>
        <StyledButtonContainer>
          {[1, 2, 3].map((item) => (
            <StyledButton
              key={item}
              sx={{
                background: selectedFAQ === item ? "blue" : undefined,
                color: selectedFAQ === item ? "#fff" : undefined,
              }}
              onClick={() => setSelectedFAQ(item)}
            >
              {item === 1 ? "One" : item === 2 ? "Two" : "Three"}
            </StyledButton>
          ))}
        </StyledButtonContainer>
        <StyledBoxContainer>
          {faqContent[selectedFAQ].map((text, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{
                color: index === 0 ? "blue" : "inherit",
                width: "100%",
                padding: "0px 15px",
              }}
            >
              {text}
            </Typography>
          ))}
        </StyledBoxContainer>
      </StyledAllContainer>
    </StyledContainer>
  );
};

export default FAQs;
