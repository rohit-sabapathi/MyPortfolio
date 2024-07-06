import React from "react";

const projects = [
    {
        id: 1,
        title:'The Calculator',
        description: 'A Simple Calculator to perform Basic Math Calculations.',
        link:"https://rohitsabapathi.pythonanywhere.com"
    },
    {
        id:2,
        title:'The RecipyBook',
        description: 'A Community Recipe Book where you can showcase your Recipes to the Public.',
        link:"https://recipybook.pythonanywhere.com"
    }
];

function Projects(){
    return (
        <section className="projects" id="project">
            <h2>My Projects: </h2>
            <div className="project-grid">
                {projects.map(project => (
                    <a href={project.link}>
                         <div className="project-card" key={project.id} >
                        
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <p>View Project</p>
                        
                         </div>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Projects;