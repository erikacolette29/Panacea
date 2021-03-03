import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  };

  handleChange = (e) => {
    this.props.updateMessage("");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, updateMessage, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.signup(this.state);
      handleSignupOrLogin()
      history.push("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  isFormInvalid() {
    const { name, email, password, passwordConf } = this.state;
    return !(name && email && password === passwordConf);
  }

  render() {
    const { name, email, password, passwordConf } = this.state;
    return (
      <div>
        <h3>Sign Up</h3>
        <div className="f-container">
        <form autoComplete="off" onSubmit={this.handleSubmit} className="f-form2">
        <div class="col-sm-7">
          <input class="form-control" placeholder="Name..."
            type="text"
            autoComplete="off"
            id="name"
            value={name}
            name="name"
            onChange={this.handleChange}
          />
          </div>
          <div class="col-sm-7">
          <input class="form-control" placeholder="Email..."
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
          />
       </div>
       <div class="col-sm-7">
          <input class="form-control" placeholder="Password..."
            type="password"
            autoComplete="off"
            id="password"
            value={password}
            name="password"
            onChange={this.handleChange}
          />
        </div>
        <div class="col-sm-7">
          <input class="form-control" placeholder="Confirm Password..."
            type="password"
            autoComplete="off"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={this.handleChange}
          />
          </div>
         
          <button className="btn btn-light" disabled={this.isFormInvalid()}>Sign Up</button>
          &nbsp;&nbsp;
          <Link className="btn btn-light" to="/">Cancel</Link>
        </form>
      </div>
      </div>
    );
  }
}

export default SignupForm;
