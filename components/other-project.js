import Button from './UI/button';
import ProjectBox from './other-project-box';
import Section from './section';
import classNamees from './other-project.module.css';

function OtherProjects() {
    const projects = [
        {
            name: "PDF Scanner",
            description: "An Application where one can scan an image and save it in '.jpg' format and can further convert it into '.pdf' format.",
            techItems: ["Python", "OpenCV","NumPy","img2pdf"],
            github: "https://github.com/ParagD25/Scanner",
            live: "https://www.youtube.com/watch?v=yfZKE19jc3w"
        },
        {
            name: "Motion Detection",
            description: "Detecting Motion using computer's webcam and plotting graph related to the data produced.",
            techItems: ["Python","OpenCV","Bokeh","Pandas"],
            github: "https://github.com/ParagD25/Motion_Detection",
            // live: "",
        },
        {
            name: "Web Scraping",
            description: "Scrapping property data from a MagicBricks Website.",
            techItems: ['Python', "bs4", "Pandas", "Requests"],
            github: "https://github.com/ParagD25/Web_scraping_magicbricks",
            // live: ""
        },

    ]
    return (
        <Section>
            <div className="section_title">
            <img src='./oproject.png' className='icon-image'></img>Other Projects
            </div>
            <div className={`${classNamees.projects_wrapper} section_content`}>
                {projects.map(project => <ProjectBox key={project.github} title={project.name} description={project.description} techItems={project.techItems} github={project.github} live={project.live} />)}
                < div className={classNamees.more} >
                    <a href="https://github.com/ParagD25?tab=repositories" target="_blank" rel="noopener noreferrer"><Button> More Projects</Button></a>
                </div>
            </div>
        </Section >
    )
}
export default OtherProjects;