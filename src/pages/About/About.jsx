import React from "react";
import "./About.css"


const About = () => {
  return ( 
    <>
    <div className="about-container">
    <h1 className="about-heading">What is Panacea?</h1>
    <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nostrum, cumque iure perspiciatis tenetur facilis illum iste perferendis ad minus architecto, labore reiciendis pariatur dolor ducimus blanditiis neque? Dolores, alias?</p>
    </div>

    <div className="team-heading-container">
    <h2 className="team-heading">The Team</h2>
    </div>

    <div className="erika-container">
    <img className="eri-pic" src="/images/eri.jpeg" alt="eri-pic"/>
    <div className="name-text-container">
    <h3>Erika Tidwell</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis veniam nemo laudantium nihil nesciunt corrupti sequi similique beatae impedit molestias? Possimus ducimus ratione sed nulla excepturi nostrum accusantium totam repellendus.</p>
    </div>
    </div>

    <div className="sophia-container">  
   
    <div className="name-text-container2">
    <h3>Sophia Seremetis </h3>
    <p className="p-text-soph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum qui, provident aperiam, autem quia officia blanditiis incidunt non ab excepturi sequi adipisci, vitae animi magni eligendi inventore sunt quisquam quas.</p>
    </div>
    <img className="sophia-pic"src="/images/sophia.jpeg" alt="sophia-pic"/>
    </div>
    </>
   );
}
 

export default About;