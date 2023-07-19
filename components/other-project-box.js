
import classNamees from './other-project-box.module.css';

function ProjectBox(props) {

    return (
        <div className={classNamees.project}>
            <div className={classNamees.project_title}>
                <a href={props.github} target="_blank" rel="noopener noreferrer" className={classNamees.project_title_link}>{props.title}</a>
                <a href={props.github} target="_blank" rel="noopener noreferrer">
                    <img src="/github.svg" alt="Github" />
                </a>
                {props.live && <a href={props.live} target="_blank" rel="noopener noreferrer">
                    <img src="/link.svg" alt="Live" />
                </a>}
            </div>
            <p className={classNamees.project_description}>{props.description}</p>
            <div className={classNamees.project_tech}>
                {props?.techItems?.map(item => <span key={item} className={classNamees.project_tech_item}>{item}</span>)}
            </div>
        </div>
    )
}
export default ProjectBox;