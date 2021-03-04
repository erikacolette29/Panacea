
import { Route, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService"
import * as blogsAPI from "../../services/blogsService";
import About from "../About/About"
import StoriesPage from "../StoriesPage/StoriesPage"
import AddStoryPage from "../AddStoryPage/AddStoryPage"
import StoriesDetails from "../StoriesDetails/StoriesDetails"
import EditStory from "../EditStory/EditStoryPage"
import { useHistory } from "react-router-dom";
import "./App.css";



function App() {
  const [stories, setStories] = useState([]);
  const [user, setUser] = useState(authService.getUser())
  const history = useHistory();

// class App extends Component {
//   state = {
//     stories: [],
//     user: authService.getUser()
//   };

async function handleLogout() {
    authService.logout();
   setUser({ user: null });
   history.push("/");
  };

  async function handleSignupOrLogin() {
    setUser({ user: authService.getUser() });
  };

  async function handleAddStory(newStoryData) {
    const newStory = await blogsAPI.create(newStoryData);
    setStories((stories) => [...stories, newStory]);
  }
  async function handleDeleteStory(id) {
    await blogsAPI.deleteOne(id);
    setStories(stories.filter((s) => s._id !== id));
    history.push("/");
  }
  async function handleUpdateStory(updatedStoryData) {
    const updatedStory= await blogsAPI.update(updatedStoryData);
    const newStoriesArray = stories.map((s) =>
      s._id === updatedStory._id ? updatedStory : s
    );
    setStories(newStoriesArray);
    history.push('/');
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
        <NavBar user={user} handleLogout={handleLogout}/>
        <Route
          exact
          path="/"
          render={() => (
            <main>
             <StoriesPage 
             user={user}
             story={stories}
             handleDeleteStory ={handleDeleteStory}
             />
            </main>
          )}
        />
         <Route 
          exact path='/details/:id'
          render={( {location} ) => 
            <StoriesDetails 
              user={user}
              location={location}
              handleDeleteStory ={handleDeleteStory}
              story={stories}
            />  
          }
        />
        <Route 
          exact path='/edit'
          render={({location}) => 
            authService.getUser() ?
            <EditStory
              user={user}
              story={stories}
              location={location}
              handleUpdateStory={handleUpdateStory}
            />
            :
            <Redirect to='/login' />
          }
          />
        
         <Route
          exact
          path="/addstory"
          render={({history}) => (
            <main>
             <AddStoryPage 
             user={user}
             history={history}
             handleAddStory={handleAddStory}
             />
            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin= {handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          )}
        />
        <Route
         exact path="/about"
        render={() =>
        user ? <About /> : <Redirect to="/login" />
        }
        />
      </>
    );
  }


export default App;
