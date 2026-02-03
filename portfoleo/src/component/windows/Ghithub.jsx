import React from "react";
import { Macwindow } from "./Macwindow";
import githubdata from "../../asset/github.json";
import "./github.scss";


const GitCard = ({ data = { id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demoLink: "" } }) => {
 return <div>
    

   <div class="project-card">
   <img src={data.image}  class="project-img"/>

    <div class="card-body">
        <h3 class="title">{data.title}</h3>

        <p class="description"> {data.description} </p>

        <div class="tags">
            
           {data.tags.map(tag=><span>{tag}</span>)}
        </div>

        <div class="links">
            <a href={data.repoLink} target="_blank">GitHub Repo</a>
            {data.demoLink &&             <a href={data.demoLink} target="_blank">Live Demo</a>
}
        </div>
    </div>
</div>
   </div>
}



const Ghithub = () => {

  return (
    <div >
      <Macwindow>
        <div className="cover">
        <div className="profile">
          <div className="imgeo">
            <img src="https://images.unsplash.com/photo-1503431128871-cd250803fa41?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <div className="info">
            <h2 className="name">Arun rajput </h2>
            <h3 className="role">frontend devloper</h3>
            <p className="shortdiscription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, repudiandae! Sed ad ullam eum culpa debitis voluptates vero eveniet optio corporis mollitia? Impedit, eaque. Nihil eius rem ullam tempore aspernatur.</p>
          </div>
        </div>
        <div className="cards">
          <div className="card bbody">
             {githubdata.map(project => {
                    return <GitCard data={project} />
                })}
 

          </div>
        </div>
        </div>
      </Macwindow>
    </div>
  );
};

export default Ghithub;





//    <div class="project-card">
//    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000"  class="project-img"/>

//     <div class="card-body">
//         <h3 class="title">Scheds - A Course Schedule Generator</h3>

//         <p class="description">
//             My proudest project yet, a comprehensive course schedule generator application built with ASP.NET Core MVC.
//         </p>

//         <div class="tags">
//             <span>ASP.NET Core</span>
//             <span>C#</span>
//             <span>Entity Framework</span>
//             <span>SQL Server</span>
//             <span>Bootstrap</span>
//             <span>jQuery</span>
//         </div>

//         <div class="links">
//             <a href="https://github.com/microsoft/dotnet" target="_blank">GitHub Repo</a>
//             <a href="https://dotnet.microsoft.com/" target="_blank">Live Demo</a>
//         </div>
//     </div>
// </div>




// <div>
    

//    <div class="project-card">
//    <img src={data.image}  class="project-img"/>

//     <div class="card-body">
//         <h3 class="title">{data.title}</h3>

//         <p class="description"> {data.description} </p>

//         <div class="tags">
            
//            {data.tags.map(tag=><span>{tag}</span>)}
//         </div>

//         <div class="links">
//             <a href={data.repoLink} target="_blank">GitHub Repo</a>
//             <a href={data.demoLink} target="_blank">Live Demo</a>
//         </div>
//     </div>
// </div>
//    </div>