import styles from "./porque.module.css"
import { faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Porque = () => {
    return (
        <div className={styles.Outer}>
            <h2>¿Por qué elegirnos?</h2>
            <div className={styles.Box}>
            <div className={styles.Column}>
                <ul>
                    <li><FontAwesomeIcon icon={faStar} className={styles.Icon}/> Amplia experiencia</li>
                    <li><FontAwesomeIcon icon={faStar} className={styles.Icon}/> Soluciones personalizadas</li>
                    <li><FontAwesomeIcon icon={faStar} className={styles.Icon}/> Atención personalizada</li>
                </ul>
            </div>
            <div className={styles.Column}>
                <ul>
                    <li><FontAwesomeIcon icon={faStar} className={styles.Icon}/> Seguridad</li>
                    <li><FontAwesomeIcon icon={faStar} className={styles.Icon}/> Confidencialidad</li>
                    <li><FontAwesomeIcon icon={faStar} className={styles.Icon}/> Precios a tu alcance</li>
                </ul>
            </div>
        </div>
        </div>
        
    )

}

export default Porque