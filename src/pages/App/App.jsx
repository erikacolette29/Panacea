import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService"
import Users from "../Users/Users"
import HomePage from "../HomePage/HomePage"
import StoriesPage from "../StoriesPage/StoriesPage"
import AddStoryPage from "../AddStoryPage/AddStoryPage"
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
             <HomePage user={user}/>
            </main>
          )}
        />
        <Route
          exact
          path="/blogs"
          render={() => (
            <main>
             <StoriesPage user={user}/>
            </main>
          )}
        />
         <Route
          exact
          path="/addstory"
          render={() => (
            <main>
             <AddStoryPage user={user}/>
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
         exact path="/users"
        render={() =>
        user ? <Users /> : <Redirect to="/login" />
        }
        />
      </>
    );
  }
}

export default App;
