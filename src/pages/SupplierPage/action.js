import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
import { isNotthenSecondParameter } from "../../utils/helper";

export const GET_SUPPLIER_PAGE = "GET_SUPPLIER_PAGE";

const headers = {
  "Content-Type": "multipart/form-data", // Modify this line
};

const handleSuccessfullNavigate = (navigate) => {
  navigate("/supplier-list");
};

const getSupplierPageDataSuccess = (payload) => {
  console.log("hii", payload);
  return {
    type: GET_SUPPLIER_PAGE,
    payload: payload,
  };
};

export const getSupplierPageData = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getSupplierPage());
    if (response?.data) {
      toast.success(response?.data?.message);
      dispatch(getSupplierPageDataSuccess(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const updateSupplier = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(
      apiEndPoints.updateSupplier(),
      payload,
      {
        headers,
      }
    );
    if (response?.data) {
      toast.success(response?.data?.message);
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    handleSuccessfullNavigate(navigate);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const deleteSupplier = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.postDeleteSupplier(), payload);
    if (response?.data) {
      toast.success(
        isNotthenSecondParameter(
          response?.data?.message,
          "Delete Data Successfull"
        )
      );
      window.location.reload();
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
