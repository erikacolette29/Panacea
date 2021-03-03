import React, {useState, useEffect }from "react";
import { Link , useParams} from "react-router-dom";
import "./StoriesDetails.css";

const StoriesDetails = ({ location, handleDeleteStory}) => {

// const {id} = useParams()
const [story, setStory]= useState(location.state.s)

// useEffect (()=>{

// })

  return (
    <>
      <div className="box2 shadow p-3 mb-5 rounded">
        <p className="title-text">{story.title}</p>
        <p className="content-text">{story.content}</p>
      </div>

<div className="link-container">
      <Link
        className="btn btn-warning"
        to={{
          pathname: "/edit",
          state: { story },
        }}
      >
        Edit Story
      </Link>
      </div>
    </>
  );
};

export default StoriesDetails;
