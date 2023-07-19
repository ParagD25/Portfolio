import classNamees from './footer.module.css';

function Footer() {
    return (
        <footer className={classNamees.footer}>
            <div className={classNamees.developed}>
                Developed By <a href="https://github.com/ParagD25/Portfolio" target="_blank" rel="noopener noreferrer" className={classNamees.link}>Parag Durafe</a>
            </div>
            <div className={classNamees.design}>
            </div>
        </footer>
    )
}
export default Footer;