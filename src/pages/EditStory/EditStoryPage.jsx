import React, { useState, useEffect, useRef } from "react";
import { useForm } from "../../hooks/useForm";
import { Link, useLocation, useHistory } from "react-router-dom";
import * as blogsAPI from "../../services/blogsService";
import "./EditStory.css";

const EditStory = ({ user, story, handleUpdateStory}) => {
  const location = useLocation();
  const history = useHistory();
  const [invalidForm, setValidForm] = useState(true);
  const formRef = useRef();
  const [state, handleChange] = useForm(location.state.story);

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [state]);

 

  return (
    <>
      <form  className="edit-container"
        ref={formRef}
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(state, "  is state");
          handleUpdateStory(state) }}>
        <input
          name="title"
          id="name"
          type="text"
          className="active"
          onChange={handleChange}
          required
        />
        <label className="active" htmlFor="name">
          Story Title
        </label>
        <input
          name="content"
          id="cast"
          type="text"
          className="active"
          onChange={handleChange}
          required
        />
        <label className="active" htmlFor="cast">
          Content
        </label>
        <button type="submit" className="btn green" disabled={invalidForm}>
          
          Save Story
        </button>
        <Link className="btn red" to="/details">
          
          Cancel
        </Link>
      </form>
    </>
  );
};

export default EditStory;
