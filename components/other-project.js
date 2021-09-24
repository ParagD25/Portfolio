import Button from './UI/button';
import ProjectBox from './other-project-box';
import Section from './section';
import classes from './other-project.module.css';

function OtherProjects() {
    const projects = [
        {
            name: "Project Name",
            description: "Project Description ...............",
            techItems: ["Python", "Python", `Python`],
            github: "https://github.com/ParagD25e",
            live: "",
        },
        {
            name: "Project Name",
            description: "Project Description ...............",
            techItems: ['Python', "Python", "CSS", "HTML"],
            github: "https://github.com/ParagD25",
            live: ""
        },
        {
            name: "Project Name",
            description: "Project Description ...............",
            techItems: ['Python', "Python", "CSS", "HTML"],
            github: "https://github.com/ParagD25",
            live: ""
        },
        {
            name: "Project Name",
            description: "Project Description ...............",
            techItems: ['Python', "CSS", "HTML", 'Python'],
            github: "https://github.com/ParagD25",
            live: ""
        },
        {
            name: "Project Name",
            description: "Project Description ...............",
            techItems: ["Python", "Python", "CSS", 'Python'],
            github: "https://github.com/ParagD25",
            live: ""
        }
    ]
    return (
        <Section>
            <div className="section_title">
                Other Projects
            </div>
            <div className={`${classes.projects_wrapper} section_content`}>
                {projects.map(project => <ProjectBox key={project.github} title={project.name} description={project.description} techItems={project.techItems} github={project.github} live={project.live} />)}
                < div className={classes.more} >
                    <a href="https://github.com/ParagD25?tab=repositories" target="_blank" rel="noopener noreferrer"><Button> More Projects</Button></a>
                </div>
            </div>
        </Section >
    )
}
export default OtherProjects;