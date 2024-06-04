import { Box, CircularProgress, Typography } from "@mui/material";

export const getSubDomain = () => {
  const url = window.location.host; // window.location.host is "subdomain.domain.com"
  const parts = url.split(".");
  const sub = parts[0]; // "subdomain"
  return sub;
};

export const loaderFunc = (data, element) => {
  if (!data) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress style={{ color: "#164e63" }} />
      </Box>
    );
  } else if (!data?.length) {
    return <Typography>NO Data Found</Typography>;
  } else {
    return element;
  }
};

export const snakeToCamel = (s) =>
  s.replace(/^_*(.)|_+(.)/g, (s, c, d) =>
    c ? c.toUpperCase() : " " + d.toUpperCase()
  );

// eslint-disable-next-line
export const urlRegex =
  /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
