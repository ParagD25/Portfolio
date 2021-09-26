import classes from './social.module.css';
import Section from './section';
import SocialLinks from './social-link';


function Social() {
    return (
        <Section>
            <div className="section_title">
                On the Web 🌐
            </div>
            <div className={`${classes.link_wrapper} section_content`}>
                <SocialLinks image="github" text="github" link="https://github.com/ParagD25" />
                <SocialLinks image="linkedin" text="linkedIn" link="https://www.linkedin.com/in/parag-durafe-b991b1191/" />
                <SocialLinks image="stackoverflow" text="Stackoverflow" link="https://stackoverflow.com/users/16798712/parag-d" />
                <SocialLinks image="twitter" text="Twitter" link="https://twitter.com/ParagDurafe" />
                <SocialLinks image="gmail" text="mail" link="mailto:paragdurafe25@gmail.com" />
            </div>
        </Section>
    )
}
export default Social;