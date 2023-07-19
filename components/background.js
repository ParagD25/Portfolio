import classes from './background.module.css';
import Section from './section';
function Background() {
    return (
        <Section className={classes.background}>
            <div className={classes.background_title}>
            <img src='./aboutme.png' class='icon-image'></img>ABOUT ME
            </div>
            <div className={classes.background_content}>
            <p>Recent Electronics and Communications Engineering graduate with a Bachelor's degree from <a href="https://www.medicaps.ac.in/" className={classes.background_link} target="_blank" rel="noreferrer">Medi-Caps University.</a>, skilled in programming and passionate about technology. Proficient in Python, SQL, JAVA, HTML, CSS, and frameworks such as Django, Flask, and FastAPI. </p>

            <p>As a back-end developer intern at ZuAi, tested authentication APIs, developed image uploading and retrieval APIs, and collaborated effectively with cross-functional teams. </p>

            <p>Experienced in modern web development technologies, including RESTful APIs. Worked on full-stack web applications like Sole Quest for footwear purchases and Moderton Blog API. Developed a Smart Home Automation System using hand gestures and a PDF scanner. Eager to learn and stay up-to-date with industry trends. Seeking challenging roles to contribute to innovative solutions.</p>


            </div>
        </Section>
    )

}
export default Background;