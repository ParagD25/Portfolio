import classNamees from './social.module.css';
import Section from './section';
import SocialLinks from './social-link';


function Social() {
    return (
        <Section>
            <div className="section_title">
            <img src='./social.png' className='icon-image'></img>On the Web
            </div>
            <div className={`${classNamees.link_wrapper} section_content`}>
                <SocialLinks image="github" text="github" link="https://github.com/ParagD25" />
                <SocialLinks image="linkedin" text="linkedIn" link="https://www.linkedin.com/in/parag-durafe/" />
                <SocialLinks image="twitter" text="Twitter" link="https://twitter.com/ParagDurafe" />
                <SocialLinks image="gmail" text="mail" link="mailto:paragdurafe2501@gmail.com" />
            </div>
        </Section>
    )
}
export default Social;