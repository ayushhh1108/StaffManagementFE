import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

const headers = {
  "Content-Type": "multipart/form-data", // Modify this line
};

const handleSuccessfullNavigate = (navigate) => {
  navigate("/director-list");
};

export const postAddProperty = (payload, navigate) => async (dispatch) => {
  try {
    console.log(
      "admin@gmail234.com1",
      payload,
      api,
      apiEndPoints,
      apiEndPoints.postPropertyEnd(),
      headers
    );
    const response = await api.post(apiEndPoints.postPropertyEnd(), payload, {
      headers,
    });
    console.log("imageGallery", response);
    if (response?.data?.status) {
      toast.success(response?.data?.message);
      handleSuccessfullNavigate(navigate);
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
