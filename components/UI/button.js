import classNamees from './button.module.css';
function Button(props) {
    return (
        <button className={classNamees.button} onClick={props.onClick}>{props.children}</button>
    )
}
export default Button;