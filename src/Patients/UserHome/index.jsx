import React from "react";
import "./style.css";
import SuggestionBox from "../../Component/SuggestionBox";
import Button from "../../Component/Button";

const UserHome = () => {
  return (
    <div className="home-body">
      <div className="button-end">
        <Button type="primary" label="Add Syptom" />
      </div>
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

export default UserHome;
