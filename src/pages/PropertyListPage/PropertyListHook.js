import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api, apiEndPoints } from "../../api";
import { toast } from "react-toastify";
import { isNotthenSecondParameter } from "../../utils/helper";
import SelectInput from "../../components/SelectInput";

export default function PropertyListHook() {
  const navigate = useNavigate();
  const [allProperty, setAllProperty] = useState([]);

  const getAllPropertyData = async () => {
    try {
      const allPropertyData = await api.get(apiEndPoints.getAllProperty());
      if (allPropertyData?.data) {
        toast.success(
          isNotthenSecondParameter(
            allPropertyData?.data?.message,
            "Get Property Data Successfull"
          )
        );
        const allProperty = allPropertyData?.data?.data?.list?.length ?
          allPropertyData?.data?.data?.list.map(item => {
            return {
              ...item,
              option: (
                <SelectInput
                  id={"position"}
                  options={[
                    { label: "Applied", value: "applied" },
                    { label: "Selected for interview", value: "selected_f_interview" },
                    { label: "Rejected", value: "rejected" },
                    { label: "Selected", value: "selected" },
                  ]}
                />
              ),
              status: item?.active == "true" ? "active" : "close",
            }
          })

          : []

        setAllProperty(allProperty || []);
        console.log("allPropertyData", allPropertyData);

      } else if (allPropertyData?.response?.data?.message) {
        toast.error(allPropertyData?.response?.data?.message);
      }
    } catch (error) {

    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    getAllPropertyData();
  }, []);

  return {
    navigate,
    allProperty,
  };
}
