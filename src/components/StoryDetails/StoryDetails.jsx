import React from "react";
import "./StoryDetails.css";


const StoryDetailsCard = ({  user, story, handleDeleteStory }) => {
    return (<>
    <p>{story.title}</p>
    <p>{story.content}</p>
    </>  );
}
 
export default StoryDetailsCard;