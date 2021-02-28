import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService"
import About from "../About/About"
import StoriesPage from "../StoriesPage/StoriesPage"
import AddStoryPage from "../AddStoryPage/AddStoryPage"
import StoriesDetails from "../StoriesDetails/StoriesDetails"
import EditStory from "../EditStory/EditStoryPage"
import "./App.css";


class App extends Component {
  state = {
    user: authService.getUser()
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  render() {
    const {user} = this.state
    return (
      <>
        <NavBar user={user} handleLogout={this.handleLogout}/>
        <Route
          exact
          path="/"
          render={() => (
            <main>
             <StoriesPage user={user}/>
            </main>
          )}
        />
         <Route 
          exact path='/details'
          render={( {location} ) => 
            <StoriesDetails 
              location={location}
            />  
          }
        />
        <Route 
          exact path='/edit'
          render={() => 
            authService.getUser() ?
            <EditStory
              user={user}
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
              handleSignupOrLogin= {this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
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
}

export default App;
