import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
export const GET_ALL_BLOGS = "GET_ALL_BLOGS";
const allBlogsGetSuccessfully = (payload) => {
    return {
      type: GET_ALL_BLOGS,
      payload: payload,
    };
  };
export const getAllblogs = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.getAllBlogs());
    if (response?.data) {
      toast.success(response?.data?.message);
        dispatch(allBlogsGetSuccessfully(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
