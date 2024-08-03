import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

const headers = {
  "Content-Type": "multipart/form-data", // Modify this line
};

const handleSuccessfullNavigate = (navigate) => {
  navigate("/director-list");
};

const handleSuccessfullNavigatetoProperty = (navigate) => {
  navigate("/property-list");
}

export const postAddProperty = (payload, navigate) => async (dispatch) => {

  try {
    const response = await api.post(apiEndPoints.postPropertyEnd(), payload, {
      headers,
    });
    if (response?.data?.status) {
      toast.success(response?.data?.message);
      handleSuccessfullNavigatetoProperty(navigate);
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("imageGallery", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
