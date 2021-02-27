import React, { useState, useEffect } from "react";
import * as blogsAPI from "../../services/blogsService"
import StoryCard from "../../components/StoryCard/StoryCard"
import AddStoryPage from "../AddStoryPage/AddStoryPage"
import "./StoriesPage.css"

function StoriesPage({user}) {
    const [stories, setStories] = useState([])

async function handleAddStory(newStoryData){
    const newStory = await blogsAPI.create(newStoryData)
    setStories((stories) => [...stories, newStory])
}


useEffect(() => {
(async function () {
    const allStories = await blogsAPI.getAll();
    console.log(allStories);
    setStories(allStories)
})();
},[])


    return ( 
        <>
        <AddStoryPage 
        user={user}
        story={stories.length}
        handleAddStory={handleAddStory}/>
        
      {stories.length ? (
          <>
          {stories.map((story) => (
              <>
              <StoryCard 
              user={user}
              story={story}
             
              key={story._id}
              />
              </>
          ))}
          </>
      ): (
          <p>no Stories</p>
      )}
        </>
     );
}
 
export default StoriesPage;