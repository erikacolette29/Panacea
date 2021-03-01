import React, { useState, useEffect } from "react";
import * as blogsAPI from "../../services/blogsService";
import { useHistory } from "react-router-dom";
import StoryCard from "../../components/StoryCard/StoryCard";
import "./StoriesPage.css";
import { Link } from "react-router-dom";

function StoriesPage({ user, story, handleDeleteStory }) {
  // const [stories, setStories]= useState([])


  // useEffect(() => {
  //   (async function () {
  //     const allStories = await blogsAPI.getAll();
  //     console.log(allStories);
  //     setStories(allStories);
  //   })();
  // }, []);

  return (
    <>
    <div className="background">
    <div className="main-title-container">
    <h1 className="main-title">Panacea</h1>
    <img className="pen" src="/images/quill.png" alt=""/>
    </div>
  
   
 
    <div className="container">

      {story.length ? (
        <>
          {story.map((s) => (
            <Link
            to={{
              pathname: `/details/${s._id}`,
              state: {s}
             
            }}
          >
              <StoryCard
                user={user}
                story={s}
                handleDeleteStory={handleDeleteStory }
                key={s._id}
              />
                
            </Link> 
          ))}
        </>
      ) : (
        <p>no Stories</p>
      )}
      </div>
      </div>
    </>
  );
}

export default StoriesPage;
