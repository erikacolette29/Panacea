import React, {useState, useEffect }from "react";
import { Link , useParams} from "react-router-dom";
import "./StoriesDetails.css";

const StoriesDetails = ({ user, location, handleDeleteStory}) => {


const [story, setStory]= useState(location.state.s)



  return (
    <>
      <div className="box2 shadow p-3 mb-5 rounded">
        <p className="title-text">{story.title}</p>
        <p className="content-text">{story.content}</p>
    
      </div>

      {story.postedBy.map(pb => (
<div className="link-container">
{user? (pb._id === user._id ?
      <Link
        className="btn btn-warning"
        to={{
          pathname: "/edit",
          state: { story },
        }}
      >
        Edit Story
      </Link>
       : ""): "2"}  
     
      </div>
       ))}
    </>
  );
};

export default StoriesDetails;
