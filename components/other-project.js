import Button from './UI/button';
import ProjectBox from './other-project-box';
import Section from './section';
import classes from './other-project.module.css';

function OtherProjects() {
    const projects = [
        {
            name: "Website Blocker",
            description: "Detecting Motion using computer's webcam and plotting graph related to the data produced.",
            techItems: ["Python"],
            github: "https://github.com/ParagD25/Website-Blocker",
            // live: "",
        },
        {
            name: "BMI Calculator",
            description: "Web Application that calculates an individuals BMI using the data given by that individual (like height and weight).",
            techItems: ['Flask', "flask_sqlalchemy", "mail", "Python"],
            github: "https://github.com/ParagD25/BMI_Calculator",
            // live: ""
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