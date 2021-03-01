import React, { useState, useEffect } from "react";
import * as blogsAPI from "../../services/blogsService";
import { useHistory } from "react-router-dom";
import StoryCard from "../../components/StoryCard/StoryCard";
import "./StoriesPage.css";
import { Link } from "react-router-dom";

function StoriesPage({ user }) {
  const [stories, setStories] = useState([]);
  const history = useHistory();

  async function handleDeleteStory(id) {
    await blogsAPI.deleteOne(id);
    setStories(stories.filter((s) => s._id !== id));
    history.push("/");
  }

  useEffect(() => {
    (async function () {
      const allStories = await blogsAPI.getAll();
      console.log(allStories);
      setStories(allStories);
    })();
  }, []);

  return (
    <>
    <div className="background">
    <div className="main-title-container">
    <h1 className="main-title">Panacea</h1>
    <img className="pen" src="/images/quill.png" alt=""/>
    </div>
  
   
 
    <div className="container">

      {stories.length ? (
        <>
          {stories.map((story) => (
            <Link
            to={{
              pathname: '/details',
              state: { story }
             
            }}
          >
              <StoryCard
                user={user}
                story={story}
                handleDeleteStory={handleDeleteStory}
                key={story._id}
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
