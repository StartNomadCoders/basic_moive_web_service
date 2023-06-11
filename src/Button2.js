import PropTypes from "prop-types";
import styles from "./components/css/Button.module.css"

function Button2 ({text}) {
    return <button className={styles.btn}>{text}</button>;
}

Button2.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button2;