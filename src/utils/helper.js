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

export const isEventBased = (input) => !!input?.target?.id;

export const isEvent = (id) => (isEventBased(id) ? id : null);

export const extractKeyValue = (input, id, val) => {
  const key = isEventBased(input) ? input.target.id : id;
  let value = isEventBased(input) ? input.target.value : val;
  return { key, value };
};


export function formatDateToYYYYMMDD(isoString) {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}