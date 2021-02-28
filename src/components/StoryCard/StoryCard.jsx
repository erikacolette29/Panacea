import React from "react";
import "./StoryCard.css";

const StoryCard = ({ user, story, handleDeleteStory }) => {
  return (
   

      <div className="box">
        <h2>{story.title}</h2>
        <p>{story.content}</p>
        
        <div>
        {story.postedBy.map(pb => (
          <p>Posted by: {pb.name}</p>
        ))}


        </div>     



        
        <button
        type="submit"
        className="btn btn-light"
        onClick={() => handleDeleteStory(story._id)}
        >
        Delete Story
      </button>
      </div>

     
  
  );
};

export default StoryCard;
