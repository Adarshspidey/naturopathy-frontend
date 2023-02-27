import React from "react";
import SuggestionBox from "../../Component/SuggestionBox";

const DoctorHome = () => {
  return (
    <div className="home-body">
      <SuggestionBox
        type="post"
        postBy="Jhon Doe"
        content="Hi I have Headache and stomach pain"
      />
      <SuggestionBox
        type="reply"
        postBy="Dr Jhon"
        content="Hi use this medicine"
      />
    </div>
  );
};

export default DoctorHome;
