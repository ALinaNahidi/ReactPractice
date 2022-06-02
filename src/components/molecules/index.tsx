import * as React from "react";

import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";


interface BookReadTimeProps {
  children?: string;
  variant?: "header" | "title" | "subtitle" | "body" | "caption";
}

const BookReadTime = (props: BookReadTimeProps) => (
  <div style={{ display: "flex" , alignItems:"center"}}>
    <AccessTimeIcon fontSize="medium" color="action" />
    <Typography variant="body1" color="gray">
      13-minute read
    </Typography>
  </div>
);

export default BookReadTime;
