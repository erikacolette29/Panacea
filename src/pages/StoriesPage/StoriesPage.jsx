import React, { useState, useEffect } from "react";
import * as blogsAPI from "../../services/blogsService";
import { useHistory } from "react-router-dom";
import StoryCard from "../../components/StoryCard/StoryCard";
import "./StoriesPage.css";

function StoriesPage({ user }) {
  const [stories, setStories] = useState([]);
  const history = useHistory();

  async function handleDeleteStory(id) {
    await blogsAPI.deleteOne(id);
    setStories(stories.filter((s) => s._id !== id));
    history.push("/blogs");
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
      {stories.length ? (
        <>
          {stories.map((story) => (
            <>
              <StoryCard
                user={user}
                story={story}
                handleDeleteStory={handleDeleteStory}
                key={story._id}
              />
            </>
          ))}
        </>
      ) : (
        <p>no Stories</p>
      )}
    </>
  );
}

export default StoriesPage;
