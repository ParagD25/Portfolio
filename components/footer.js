import classes from './footer.module.css';

function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.developed}>
                Developed By <a href="https://github.com/ParagD25/Portfolio" target="_blank" rel="noopener noreferrer" className={classes.link}>Parag Durafe</a>
            </div>
            <div className={classes.design}>
            </div>
        </footer>
    )
}
export default Footer;