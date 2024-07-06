import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import { Box, styled, Typography } from "@mui/material";

const BoxContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

const AccordionText = styled(Accordion)({
  background: "#282828",
  color: "#fff",
  width: "100%",
  padding: "10px",
});

const AccordionDetailsText = styled(AccordionDetails)({
  background: "#282828",
  color: "#fff",
});

const AccordionSummaryText = styled(AccordionSummary)({
  background: "#282828",
  color: "#fff",
});

const FooterAccordium = () => {
  return (
    <BoxContainer>
      <AccordionText defaultExpanded>
        <Typography sx={{ marginLeft: "16px" }}>ALL PROGRAMS</Typography>
        <AccordionDetailsText>
          {[
            "Data Science & AI",
            "Product Management",
            "Business Analytics",
            "Digital Transformation",
            "Business Management",
            "Project Management",
            "Strategy & Leadership",
            "Senior Management",
            "Fintech",
          ].map((program, index) => (
            <Accordion key={index}>
              <AccordionSummaryText
                expandIcon={<AddTwoToneIcon sx={{ color: "#fff" }} />}
                aria-controls={`panel${index + 1}-content`} // Unique ID for accessibility
                id={`panel${index + 1}-header`} // Unique ID for accessibility
              >
                {program}
              </AccordionSummaryText>
              <AccordionDetailsText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetailsText>
            </Accordion>
          ))}
        </AccordionDetailsText>
      </AccordionText>
    </BoxContainer>
  );
};

export default FooterAccordium;
