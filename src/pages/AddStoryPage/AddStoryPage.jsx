import React, { useState, useRef, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { useHistory } from 'react-router-dom'
import * as blogsAPI from "../../services/blogsService"
import "./AddStoryPage.css"

export default function AddStoryPage(props) {
    const history = useHistory()
    const [invalidForm, setValidForm] = useState(true);
    const formRef = useRef();

    const [state, handleChange] = useForm({
      title:"",
      content: "",
    });

    async function handleAddStory(newStoryData){
      await blogsAPI.create(newStoryData)
      history.push('/blogs')
    }

    useEffect(() => {
        formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
      }, [state]);

      async function handleSubmit(e) {
        e.preventDefault()
        handleAddStory(state)
      }

    return ( 
    <>
      
        <form 
            autoComplete="off"
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault();
              console.log(state, " this is state");
              handleAddStory(state);
            }}
          >
              <input
                placeholder="title..."
                name="title"
                value={state.title}
                onChange={handleChange}
                required
              />
              <input
                placeholder="write a story ..."
                name="content"
                value={state.content}
                onChange={handleChange}
                required
              />
              <span class="input-group-btn">
                  <button
                    type="submit"
                    disabled={invalidForm}
                  >
                    ADD
                  </button>
                </span>

                </form>
          </>  
      
     );
}
