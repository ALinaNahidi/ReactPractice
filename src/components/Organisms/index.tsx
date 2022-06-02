import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import TypographyComponent from "../atoms/Typography";
import BookReadTime from "../molecules";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";


export default function BookCard() {
  return (
    <Card
      sx={{
        maxWidth: 284,
        boxShadow: " 0 15px 6px -6px #C6DAF6",
        borderRadius: "10px",
      }}
    >
      <CardMedia
        component="img"
        height="294.1"
        width="292"
        image={require("../../Images/book1.png")}
        alt="Book Cover"
      />
      <CardContent >
        <TypographyComponent
          variant="subtitle"
          children="Bring your human to work"
        />
        <TypographyComponent
          variant="body1"
          children="Jim Collins & Bill Lazier"
        />
        <BookReadTime />
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton aria-label="hamburger">
          <MoreHorizIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
