import React, { useState } from "react";
import "./index.scss";
import AccountPageHooks from "./AccountPageHooks";
import { Box, Container, Typography } from "@mui/material";
import acImage from "../../assets/images/ac-image.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLocationArrow,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

function AccountPage() {
  const { navigate } = AccountPageHooks();
  const [headerData, setHeaderData] = useState([
    {
      id: "no",
      numeric: true,
      label: "SR NO",
    },
    {
      id: "title",
      numeric: false,
      label: "Title",
    },
    {
      id: "metaTitle",
      numeric: false,
      label: "Meta title",
    },
    {
      id: "metaDesc",
      numeric: false,
      label: "Meta Description",
    },
    {
      id: "image_position",
      numeric: false,
      label: "Image Position",
    },
    {
      id: "action",
      numeric: true,
      label: "ACTION",
    },
  ]);
  const allData = [
    {
      title: "ABC",
      image_position: "left",
      metaTitle: "description",
      metaDesc: "metaDescmetaDesc",
      _id: "111",
    },
    {
      title: "dd",
      image_position: "left",
      metaTitle: "eeee",
      metaDesc: "metaDescmetaDesc",
      _id: "987",
    },
    {
      title: "Lorem",
      image_position: "left",
      metaTitle: "dolor",
      metaDesc: "metaDescmetaDesc",
      _id: "222",
    },
    {
      title: "Foo",
      image_position: "left",
      metaTitle: "baz",
      metaDesc: "metaDescmetaDesc",
      _id: "333",
    },
    {
      title: "Lorem",
      image_position: "left",
      metaTitle: "dolor",
      metaDesc: "metaDescmetaDesc",
      _id: "444",
    },
    {
      title: "Foo",
      image_position: "left",
      metaTitle: "baz",
      metaDesc: "metaDescmetaDesc",
      _id: "555",
    },
    {
      title: "Lorem",
      image_position: "left",
      metaTitle: "dolor",
      metaDesc: "metaDescmetaDesc",
      _id: "666",
    },
    {
      title: "Foo",
      image_position: "left",
      metaTitle: "baz",
      metaDesc: "metaDescmetaDesc",
      _id: "777",
    },
    {
      title: "Lorem",
      image_position: "left",
      metaTitle: "dolor",
      metaDesc: "metaDescmetaDesc",
      _id: "888",
    },
    {
      title: "Foo",
      image_position: "left",
      metaTitle: "baz",
      metaDesc: "metaDescmetaDesc",
      _id: "999",
    },
    {
      title: "Lorem",
      image_position: "left",
      metaTitle: "dolor",
      metaDesc: "metaDescmetaDesc",
      _id: "101010",
    },
    {
      title: "Foo",
      image_position: "left",
      metaTitle: "baz",
      metaDesc: "metaDescmetaDesc",
      _id: "111111",
    },
    {
      title: "Lorem",
      image_position: "left",
      metaTitle: "dolor",
      metaDesc: "metaDescmetaDesc",
      _id: "121212",
    },
    {
      title: "Foo",
      image_position: "left",
      metaTitle: "baz",
      metaDesc: "metaDescmetaDesc",
      _id: "131313",
    },
    {
      title: "Lorem",
      image_position: "left",
      metaTitle: "dolor",
      metaDesc: "metaDescmetaDesc",
      _id: "141414",
    },
  ];

  return (
    <Box
      className="menu-list-page"
      component="main"
      sx={{ flexGrow: 1, p: 3, mt: 8 }}
    >
      <Container className="pt-[60px] menu-list-container text-left">
        <Box className="feedback-card">
          <Box className="feedback-header">
            <Box className="client-box w-[75%]">
              <img src={acImage} alt="home" className="profile-image" />
              <Box className="feedback-description">
                <Typography variant="h6" className="name">
                  Vishal
                </Typography>
                <Typography variant="p" className="position">
                  Managing Director
                </Typography>
              </Box>
            </Box>
          </Box>
          <hr class="h-px mb-6 bg-gray-200 border-0"></hr>
          <Box className="flex flex-wrap justify-between">
            <Typography className="feedback-text w-full mb-3">
              Contact Details
            </Typography>

            <Box className="w-[25%] account-details-box md:w-[50%] lg:w-[35%] xl:w-[25%] flex flex-wrap flex-col">
              <Box className="d-flex icons-box">
                <MdAttachEmail color="#687693" className="me-1" size={20} />
                <span className="feature-number">vishal@gmail.com</span>
              </Box>
              <Box className="d-flex icons-box">
                <IoCallSharp color="#687693" className="me-1" size={19} />
                <span className="feature-number">+91 123-4567-890</span>
              </Box>
              <Box className="d-flex icons-box">
                <FaLocationArrow color="#687693" className="me-1" size={19} />
                <span className="feature-number">
                  Jaipur, Rajsthan, India - 302017
                </span>
              </Box>
            </Box>
            <Box className="w-[25%] account-details-box md:w-[50%] md:w-[35%] xl:w-[25%] flex flex-wrap flex-col">
              <Box className="d-flex icons-box">
                <FaFacebookF color="#687693" className="me-1" size={19} />
                <span className="feature-number">@vishalSharma</span>
              </Box>
              <Box className="d-flex icons-box">
                <FaXTwitter color="#687693" className="me-1" size={19} />
                <span className="feature-number">@vishalSharma</span>
              </Box>
              <Box className="d-flex icons-box">
                <FaInstagram color="#687693" className="me-1" size={19} />
                <span className="feature-number">@vishalSharma</span>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
export default AccountPage;
