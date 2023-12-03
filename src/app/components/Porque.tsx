import styles from "./porque.module.css"
import { faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Porque = () => {
    return (
        <div className={styles.Box}>
            <div className={styles.Column}>
                <ul>
                    <li><FontAwesomeIcon icon={faStar}/> Amplia experiencia</li>
                    <li><FontAwesomeIcon icon={faStar}/> Soluciones personalizadas</li>
                    <li><FontAwesomeIcon icon={faStar}/> Atención personalizada</li>
                </ul>
            </div>
            <div className={styles.Column}>
                <ul>
                    <li><FontAwesomeIcon icon={faStar}/> Seguridad</li>
                    <li><FontAwesomeIcon icon={faStar}/> Confidencialidad</li>
                    <li><FontAwesomeIcon icon={faStar}/> Precios a tu alcance</li>
                </ul>
            </div>
        </div>
    )

}

export default Porque