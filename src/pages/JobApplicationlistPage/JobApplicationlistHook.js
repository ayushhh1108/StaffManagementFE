import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getJobApplications } from "./action";
import SelectInput from "../../components/SelectInput";

export default function JobApplicationlistHook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tableData, setTableData] = useState();

  const StoreData = useSelector((state) => state?.jobApplicationsReducer);

  useEffect(() => {
    dispatch(getJobApplications());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const td = StoreData?.jobAppData?.map(
      ({
        careerID,
        firstName,
        lastName,
        mobile,
        qualification,
        message,
        status,
        _id,
      }) => ({
        job_name: careerID?.degination,
        first_name: firstName,
        last_name: lastName,
        mobile,
        qualification,
        message,
        status,
        resume: "view",
        action: (
          <SelectInput
            id={"position"}
            options={[
              { label: "Applied", value: "applied" },
              {
                label: "Selected for interview",
                value: "selected_f_interview",
              },
              { label: "Rejected", value: "rejected" },
              { label: "Selected", value: "selected" },
            ]}
          />
        ),
        _id,
      })
    );
    setTableData(td ? td : []);
  }, [StoreData]);
  console.log("jobAppData", StoreData);
  return {
    navigate,
    tableData,
  };
}
