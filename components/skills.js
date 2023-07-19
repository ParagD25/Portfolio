import classes from './skills.module.css';
import Section from './section';
function Skills() {
    return (
        <Section>
            <div className="section_title">
            <img src='./skill.png' class='icon-image'></img>SKILLS
            </div>
            <div className="section_content">
                <div className={classes.skills}>
                    <div className={classes.skills_category}>
                        <div className={classes.skills_category}>LANGUAGES</div>
                        <ul>
                            <li className={classes.skills_category_item}>Python</li>
                            <li className={classes.skills_category_item}>SQL</li>
                            <li className={classes.skills_category_item}>Java</li>
                            <li className={classes.skills_category_item}>HTML</li>
                            <li className={classes.skills_category_item}>CSS</li>
                        </ul>
                    </div>

                    <div className={classes.skills_category}>
                        <div className={classes.skills_category}>FRAMEWORKS</div>
                        <ul>
                            <li className={classes.skills_category_item}>Django</li>
                            <li className={classes.skills_category_item}>FastAPI</li>
                            <li className={classes.skills_category_item}>Flask</li>
                            <li className={classes.skills_category_item}>PyTest</li>
                            <li className={classes.skills_category_item}>Scrapy</li>
                            <li className={classes.skills_category_item}>Bootstrap</li>
                        </ul>
                    </div>

                    <div className={classes.skills_category}>
                        <div className={classes.skills_category}>LIBRARIES</div>
                        <ul>
                            <li className={classes.skills_category_item}>OpenCV</li>
                            <li className={classes.skills_category_item}>Numpy</li>
                            <li className={classes.skills_category_item}>Pandas</li>
                            <li className={classes.skills_category_item}>bs4</li>
                            <li className={classes.skills_category_item}>Tkinter</li>
                            <li className={classes.skills_category_item}>Kivy</li>
                        </ul>
                    </div>

                    <div className={classes.skills_category}>
                        <div className={classes.skills_category}>DATABASES</div>
                        <ul>
                            <li className={classes.skills_category_item}>MySQL</li>
                            <li className={classes.skills_category_item}>MongoDB</li>
                            <li className={classes.skills_category_item}>PostgreSQL</li>
                        </ul>
                    </div>

                    <div className={classes.skills_category}>
                        <div className={classes.skills_category}>TOOLS</div>
                        <ul>
                            <li className={classes.skills_category_item}>Git</li>
                            <li className={classes.skills_category_item}>GitHub &#38; GitHub Actions</li>
                            <li className={classes.skills_category_item}>Heroku</li>
                            <li className={classes.skills_category_item}>Deta</li>
                            <li className={classes.skills_category_item}>Vercel</li>
                            <li className={classes.skills_category_item}>Python Anywhere</li>
                            <li className={classes.skills_category_item}>Chrome DevTools
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </Section>
    )
}
export default Skills;