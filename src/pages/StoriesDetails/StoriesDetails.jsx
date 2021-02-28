import React from "react";
import { Link } from "react-router-dom";
import "./StoriesDetails.css";

const StoriesDetails = ({ story }) => {
  return (
    <>
      <h1>Detail Page</h1>

      <Link
        className="btn btn-warning"
        to={{
          pathname: "/edit",
          state: { story },
        }}
      >
        Edit Story
      </Link>
    </>
  );
};

export default StoriesDetails;
