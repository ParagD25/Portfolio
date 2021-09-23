import ProjectBox from './project-box';
import classes from './projetcs.module.css';
import Section from './section';
function Projects() {
    const projects = [
        {
            name: "Motion Detection",
            tech: "Open-CV, Pandas, Bokeh",
            github: "https://github.com/ParagD25/Motion_Detection",
            live: ""
        },
        {
            name: "Stock Analysis",
            tech: "Flask, Pandas_Datareader, Bokeh",
            github: "https://github.com/ParagD25/Stocks",
            live: "https://bull-stockanalysis.herokuapp.com/"
        },
        {
            name: "Geocoder",
            tech: "Flask, Pandas, Geopy",
            github: "https://github.com/ParagD25/Geocoder",
            live: "https://geo-coder1.herokuapp.com/"
        },
    ]
    return (
        <Section>
            <div className="section_title">
                Featured Projects 📁
            </div>
            <div className={`${classes.projects_wrapper} section_content`}>
                {projects?.map(project => <ProjectBox key={project.github} name={project.name} tech={project.tech} github={project.github} live={project.live} />)}
            </div>
        </Section>
    )
}
export default Projects;