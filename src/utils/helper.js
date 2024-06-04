import { Box, CircularProgress, Typography } from "@mui/material";

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

export const isNotthenSecondParameter = (first, second) => {
  if (first) {
    return first;
  } else {
    return second;
  }
};
