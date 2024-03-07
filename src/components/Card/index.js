import * as React from "react";
import "./index.scss";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import slider1 from "../../assets/Slider images/slider1.jpg";
import { FaShareNodes } from "react-icons/fa6";

export default function CardBox() {
  return (
    <Card sx={{ maxWidth: 500 }} className="card-main">
      <CardMedia sx={{ height: 340 }} image={slider1} title="green iguana">
        <Box className="Featured-label-box">
          <Typography className="Featured-label">Featured</Typography>
        </Box>
      </CardMedia>
      <CardContent style={{ padding: "25px" }} className="card-Content">
        <Box className="options-box">
          <Box className="options-description">
            <Typography variant="h6" className="h6">
              Residential
            </Typography>
            <Typography variant="p" className="span">
              We have the best properties Sale.
            </Typography>
          </Box>
          <Typography className="price">$77,000.00</Typography>
        </Box>
        <Box className="share-box">
          <Typography className="username">Endora</Typography>
          <Box className="share">
            <FaShareNodes className="share-icon" />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
