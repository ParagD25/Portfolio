import classNamees from './background.module.css';
import Section from './section';
function Experience() {
    return (
        <Section className={classNamees.background}>
            <div className={classNamees.background_title}>
            <img src='./experience.png' className='icon-image'></img>Experience
            </div>
            <div className={classNamees.background_content}>
            <div className={classNamees.experience}>
            <p><a href="https://www.zuapp.co/" className={classNamees.background_link} target="_blank" rel="noreferrer">ZuAi</a></p>
            <p><b>November 2022 - April 2023</b></p>
            </div>
            

            <ul>
                <li><p>Tested testcases for an authentication API and developed new APIs for image uploading and retrieval, utilizing modern development tools and techniques.</p></li>
                <li><p>Contributed to the integration of APIs with popular data storage solutions such as MongoDB and Redis, ensuring seamless data storage and retrieval across the application. </p></li>
                <li><p>Demonstrated ability to work in a fast-paced environment and collaborate effectively with cross-functional teams to meet project deadlines while maintaining a high level of code quality and project deliverables. </p></li>
                <li><p>Gained hands-on experience in modern web development technologies, including RESTful APIs and Node.js, and successfully applied this knowledge to develop efficient and scalable code.</p></li>
            </ul>


            </div>
        </Section> 
    )

}
export default Experience;