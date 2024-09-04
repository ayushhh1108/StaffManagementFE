import React, { useState } from "react";
import "./index.scss";
import AccountPageHooks from "./AccountPageHooks";
import { Box, Container, Typography } from "@mui/material";
import acImage from "../../assets/images/ac-image.png";
import { FaFacebookF, FaInstagram, FaLocationArrow } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

function AccountPage() {
  const { user } = AccountPageHooks();
  console.log(
    "user",
    user,
    !!user?.image?.length && user?.image?.[0],
    (!!user?.image?.length && user?.image?.[0]) ?? acImage
  );
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
              <img
                src={(user?.image?.length && user?.image?.[0]) ?? acImage}
                alt="home"
                className="profile-image"
              />
              <Box className="feedback-description">
                <Typography variant="h6" className="name">
                  {`${user?.firstName} ${user?.lastName}`}
                </Typography>
                <Typography variant="p" className="position">
                  {user?.role?.[0]?.name}
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
                <span className="feature-number">{user?.email}</span>
              </Box>
              <Box className="d-flex icons-box">
                <IoCallSharp color="#687693" className="me-1" size={19} />
                <span className="feature-number">
                  {user?.countryCode} {user?.mobile}
                </span>
              </Box>
              {/* <Box className="d-flex icons-box">
                <FaLocationArrow color="#687693" className="me-1" size={19} />
                <span className="feature-number">
                  Jaipur, Rajsthan, India - 302017
                </span>
              </Box> */}
            </Box>
            <Box className="w-[25%] account-details-box md:w-[50%] md:w-[35%] xl:w-[25%] flex flex-wrap flex-col">
              {/* <Box className="d-flex icons-box">
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
              </Box> */}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
export default AccountPage;
