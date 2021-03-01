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
      <h1>Detail Page</h1>
<p>{story.title}</p>
<p>{story.content}</p>

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
