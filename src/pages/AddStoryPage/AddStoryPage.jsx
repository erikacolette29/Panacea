import React, { useState, useRef, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import "./AddStoryPage.css"

export default function AddStoryPage({ user, story, handleAddStory }) {
    const [invalidForm, setValidForm] = useState(true);
    const [state, handleChange] = useForm({
      title:"",
      content: "",
    });

    const formRef = useRef();

    useEffect(() => {
        formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
      }, [state]);

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
