import classNamees from './header.module.css';
import Button from './UI/button';
function Header() {
    return (
        <>
            <h5 className={classNamees.header_logo}><img src='./profile.png'></img> Parag Durafe</h5>
            <div className={classNamees.header_background}></div>
            <header className={classNamees.header}>
                <h1>HI THERE👋, I&rsquo;m!</h1>
                <h2 className={classNamees.header_info}>Parag Durafe</h2>
                <h3 className={classNamees.header_tag}>Software Developer</h3>
                {/* <h4 className={classNamees.header_details}>Python Developer focused on building webapps with pixel perfect User Experince.</h4> */}
                <div className={classNamees.cta}>
                    <Button> <a lass="resume" href="./Parag_Durafe-Resume.pdf" target="_blank" rel="noopener noreferrer">Downlod Resume</a> </Button>
                </div>
                <h3 className={classNamees.header_contact}> <span>Get in touch </span> <span className={classNamees.emoji_pointer}>👉</span><span> <a href="mailto:paragdurafe2501@gmail.com" target="_blank" rel="noopener noreferrer" className={classNamees.header_contact_link}>paragdurafe2501@gmail.com</a> </span> </h3>
            </header>
        </>
    )
}
export default Header;