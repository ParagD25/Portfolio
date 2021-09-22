import classes from './skills.module.css';
import Section from './section';
function Skills() {
    return (
        <Section>
            <div className="section_title">
                SKILLS 🔧
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
                        <div className={classes.skills_category}>TOOLS</div>
                        <ul>
                            <li className={classes.skills_category_item}>Git</li>
                            <li className={classes.skills_category_item}>GitHub &#38; GitHub Actions</li>
                            <li className={classes.skills_category_item}>Heroku</li>
                            <li className={classes.skills_category_item}>Chrome DevTools
                            </li>
                        </ul>
                    </div>
                    <div className={classes.skills_category}>
                        <div className={classes.skills_category}>FRAMEWORKS/LIBRARIES</div>
                        <ul>
                            <li className={classes.skills_category_item}>Flask</li>
                            <li className={classes.skills_category_item}>Keras</li>
                            <li className={classes.skills_category_item}>Tensorflow</li>
                            <li className={classes.skills_category_item}>Open-CV</li>
                            <li className={classes.skills_category_item}>Pandas</li>
                            <li className={classes.skills_category_item}>Bootstrap</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    )
}
export default Skills;