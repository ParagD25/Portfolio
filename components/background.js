import classes from './background.module.css';
import Section from './section';
function Background() {
    return (
        <Section className={classes.background}>
            <div className={classes.background_title}>
                BACKGROUND 👨‍💻
            </div>
            <div className={classes.background_content}>
                <p>I&rsquo;m currently pursuing Engineering in Electronics and Communication at <a href="https://www.medicaps.ac.in/" className={classes.background_link} target="_blank" rel="noreferrer">Medi-Caps University.</a> I&rsquo;m also a member of <a href="https://gdsc.community.dev/medi-caps-university-indore/" className={classes.background_link} target="_blank" rel="noreferrer">Google Developer Student Club</a> on my University Campus.</p>
                <p>As a Python developer, I enjoy learning new frameworks and libraries. Recently I have studied Open-CV which is a python library, which is used for Computer Vision and Deep Learning.</p>
                <p><span>When I&apos;m not coding</span>, I&apos;m probably reading a book, or playing online games.</p>
            </div>
        </Section>
    )

}
export default Background;