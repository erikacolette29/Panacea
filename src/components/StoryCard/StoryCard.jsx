import React from "react";
import "./StoryCard.css";

const StoryCard = ({ user, story, handleDeleteStory }) => {
  return (
    <>
      <h1>{story.title}</h1>
      <p>{story.content}</p>
    
        <>
          <button
            type="submit"
            className="btn red"
            onClick={() => handleDeleteStory(story._id)}
          >
            Delete Story
          </button>
        </>
       

    </>
  );
};

export default StoryCard;
