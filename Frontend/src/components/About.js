import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./About.css";
const About = () => {
  return (
    <div>
      <img src="https://images.squarespace-cdn.com/content/v1/576b05af03596ed61e7ea613/1578960215008-QQGY1I3DNTG6CPJCP1TW/Art+Studio+Sucessful+Artist.jpg" style={{ maxWidth: '100%' }} />
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          Who are we?
        </Typography>
        <p> </p>
        <p className="about-text">We are group of Designers and Engineers devoted to uplift your small business by providing professionalism to your products,
          such as advertising, monitoring sales etc by providing necessary resources to you.</p>
          
          
        
      </Box>
    </div>
  );
};

export default About;
