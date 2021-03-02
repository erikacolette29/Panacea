import React from "react";
import "./StoryCard.css";

const StoryCard = ({ user, story, handleDeleteStory }) => {
  return (
    

      <div className="box">
        <h2>{story.title}</h2>
        {/* <p className="content">{story.content}</p> */}
        
        <div>

        {story.postedBy.map(pb => (
            <>
          <p>Posted by: {pb.name}</p>
          {user ? (pb._id === user._id ?
           <button type="submit" className="btn btn-light"  onClick={() => handleDeleteStory(story._id)}>Delete Story</button> : ""):""}
         
          </>
        ))}


        </div>     

        
      </div>

     
  
  );
};

export default StoryCard;
