import classNamees from './section.module.css';

function Section(props) {
    return (
        <section className={`${classNamees.section} ${props.className}`} id={props.id}>
            {props.children}
        </section>
    )
}
export default Section;