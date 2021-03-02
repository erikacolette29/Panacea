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
      history.push('/')
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
    <h1>Add Your Story</h1>

  
   <div className="f-container">
        <form className="f-form1"
            autoComplete="off"
            ref={formRef}
            onSubmit={handleSubmit}
          >
              <div class="col-sm-12">
              <input class="form-control"
                placeholder="title..."
                name="title"
                maxlength="20"
                value={state.title}
                onChange={handleChange}
                required
              />
               </div>
               <div class="col-md-12">
              <textarea class="form-control" 
                placeholder="write a story ..."
                name="content"
                maxlength="200"
                value={state.content}
                onChange={handleChange}
                required
              />
              </div>
             
              <span class="input-group-btn">
                  <button
                    type="submit"
                    disabled={invalidForm}
                  >
                    Publish
                  </button>
                </span>

                </form>
                </div>
          </>  
      
     );
}
