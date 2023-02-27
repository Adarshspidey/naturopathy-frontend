import React from "react";
import "./style.css";

const SuggestionBox = ({ content, postBy, type }) => {
  return (
    <div className={`suggestion-box ${type === "post" ? "post" : "reply"}`}>
      <div className="suggestion-post-by">
        <div>
          {type === "post" ? "Posted By" : "Replied By"} :{" "}
          <span className="post-by-name">{postBy}</span>
        </div>
      </div>
      {content}
    </div>
  );
};

export default SuggestionBox;
