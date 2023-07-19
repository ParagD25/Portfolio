import ProjectBox from './project-box';
import classes from './projetcs.module.css';
import Section from './section';
function Projects() {
    const projects = [
        {
            name: "The Sole Quest",
            tech: "Django, Stripe, FastAPI, MongoDB",
            github: "https://github.com/ParagD25/the_sole_quest",
            // live: ""
        },
        {
            name: "PDF Collaborator",
            tech: "Django, PythonAnywhere, PostgreSQL",
            github: "https://github.com/ParagD25/PDFCollab",
            live: "https://parag25.pythonanywhere.com/"
        },
        {
            name: "Smart Home Automation",
            tech: "OpenCV, Arduino, MicroPython",
            github: "https://github.com/ParagD25/Smart_Home_Automation",
            // live: ""
        },
        {
            name: "Moderton Blog API",
            tech: "FastAPI, MongoDB, Deta",
            github: "https://github.com/ParagD25/Moderton",
            // live: ""
        },
    ]
    return (
        <Section>
            <div className="section_title">
                <img src='./fproject.png' class='icon-image'></img>Featured Projects 
            </div>
            <div className={`${classes.projects_wrapper} section_content`}>
                {projects?.map(project => <ProjectBox key={project.github} name={project.name} tech={project.tech} github={project.github} live={project.live} />)}
            </div>
        </Section>
    )
}
export default Projects;