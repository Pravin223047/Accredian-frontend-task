import { SignUp } from "@clerk/clerk-react";
import { Box, styled } from "@mui/material";
import React from "react";

const BoxConatiner = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100vh",
});

const SignUpPage = () => {
  return (
    <BoxConatiner>
      <SignUp />
    </BoxConatiner>
  );
};

export default SignUpPage;
