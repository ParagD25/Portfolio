import classes from './header.module.css';
import Button from './UI/button';
function Header() {
    return (
        <>
            <h5 className={classes.header_logo}><img src='./profile.png'></img> Parag Durafe</h5>
            <div className={classes.header_background}></div>
            <header className={classes.header}>
                <h1>HI THERE👋, I&rsquo;m!</h1>
                <h2 className={classes.header_info}>Parag Durafe</h2>
                <h3 className={classes.header_tag}>Software Developer</h3>
                {/* <h4 className={classes.header_details}>Python Developer focused on building webapps with pixel perfect User Experince.</h4> */}
                <div className={classes.cta}>
                    <Button> <a lass="resume" href="./Parag_Durafe-Resume.pdf" target="_blank" rel="noopener noreferrer">Downlod Resume</a> </Button>
                </div>
                <h3 className={classes.header_contact}> <span>Get in touch </span> <span className={classes.emoji_pointer}>👉</span><span> <a href="mailto:paragdurafe2501@gmail.com" target="_blank" rel="noopener noreferrer" className={classes.header_contact_link}>paragdurafe2501@gmail.com</a> </span> </h3>
            </header>
        </>
    )
}
export default Header;