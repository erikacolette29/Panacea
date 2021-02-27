import React from "react";
import "./StoryCard.css"

const StoryCard = ({user, story}) => {
    return ( 
        <>
        <h1>{story.title}</h1>
        <p>{story.content}</p>
        </>
     );
}
 
export default StoryCard;