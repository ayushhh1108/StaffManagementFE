import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getJobApplications } from "./action";
import SelectInput from "../../components/SelectInput";

export default function JobApplicationlistHook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tableData, setTableData] = useState();
  const [view, setView] = useState();

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
        job_name: careerID?.degination ?? careerID?.designation,
        first_name: firstName,
        last_name: lastName,
        mobile,
        qualification,
        message,
        status,
        resume: (
          <p id={_id} onClick={handleView}>
            View
          </p>
        ),
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

  const handleView = (e) => {
    const aa = StoreData?.jobAppData?.find((i) => i._id === e?.target.id);
    // setView(aa);
    console.log("aa?.resume[0]", aa?.resume[0]);
    window.open(aa?.resume?.[0], "_blank");
  };

  return {
    navigate,
    tableData,
    view,
    setView,
  };
}
