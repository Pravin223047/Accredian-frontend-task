import * as React from "react";
import {
  Box,
  styled,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const BoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  height: "100%",
}));

const programs = [
  "PRODUCT MANAGEMENT",
  "STRATEGY AND LEADERSHIP",
  "BUSINESS MANAGEMENT",
  "FINTECH",
  "SENIOR MANAGEMENT",
  "DATA SCIENCE",
  "DIGITAL TRANSFORMATION",
  "BUSINESS ANALYTICS",
];

const accordionStyles = {
  background: "#1A73E8",
  color: "#fff",
  padding: "10px",
  minWidth: "320px",
};

const Accordium = () => {
  return (
    <BoxContainer>
      <Box>
        <Accordion defaultExpanded sx={accordionStyles}>
          <Typography sx={{ marginLeft: "16px" }}>PROGRAMS</Typography>
          <AccordionDetails>
            {programs.map((program, index) => (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  {program}
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
            ))}
          </AccordionDetails>
        </Accordion>
      </Box>
    </BoxContainer>
  );
};

export default Accordium;
