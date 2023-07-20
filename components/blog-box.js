import classNamees from './project-box.module.css';

function BlogBox(props) {

    function clickHandler() {
        window.open(props.live, '_blank').focus();
    }

    return (
        <div className={classNamees.project_box} >
            <div className={classNamees.project_box_link}>
                {props.live && <a href={props.live} target="_blank" rel="noopener noreferrer">
                    <img src="/link.svg" alt="Live" />
                </a>}
            </div>
            <div className={classNamees.project_box_content} onClick={clickHandler}>
                <h3>{props.name}</h3>
                <h5>{props.tech}</h5>
            </div>

        </div>
    )
}
export default BlogBox