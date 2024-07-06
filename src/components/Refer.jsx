import {
  Box,
  Button,
  Snackbar,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import React from "react";
import ReferPopupModal from "./ReferPopupModal";
import { useAuth } from "@clerk/clerk-react";

const ContainerBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#DDEAFC",
  maxWidth: "100%",
  height: "100%",
  padding: "15px 0px",
  display: "flex",
  gap: 25,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
}));

const ImageCont = styled(Box)({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& > img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

const ButtonArea = styled(Button)(({ theme }) => ({
  background: "#1B66C9",
  color: "#fff",
  width: "130px",
  height: "50px",
  borderRadius: 5,
  fontSize: 14,
  "&:hover": {
    background: "#5C76F8",
  },
  [theme.breakpoints.up("lg")]: {
    width: "150px",
    height: "50px",
    fontSize: 16,
  },
}));

const Refer = () => {
  const theme = useTheme();
  const { isSignedIn } = useAuth();
  const [open, setOpen] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

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
      <ContainerBox id="refer">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "#000",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: "24px",
              [theme.breakpoints.up("lg")]: {
                fontSize: "34px",
              },
            }}
          >
            How Do <span style={{ color: "blue" }}>I Refer?</span>
          </Typography>
          <ImageCont>
            <img src="/howdoirefer.png" alt="howdoirefer" />
          </ImageCont>
          <ButtonArea variant="contained" color="primary" onClick={handleOpen}>
            Refer Now
          </ButtonArea>
        </Box>
      </ContainerBox>
      <ReferPopupModal open={open} handleClose={() => setOpen(false)} />
    </>
  );
};

export default Refer;
