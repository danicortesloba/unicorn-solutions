import styles from "./servicios.module.css"
import { faComputer, faGlobe, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Servicios = () => {
    return (
        <div className={styles.Box}>
            <div className={styles.Service}>
                <FontAwesomeIcon icon={faGlobe} 
                    className={styles.Icon}/>   
                <h3>Páginas web</h3>
                <p>Deja que el mundo conozca tu empresa a través de un sitio web adecuado a tu industria.</p>
            </div>

            <div className={styles.Service}>
                <FontAwesomeIcon icon={faComputer} 
                    className={styles.Icon}/>
                    <h3>Aplicaciones</h3>
                    <p>Agiliza los procesos de tu empresa a través de aplicaciones de control de inventario, agendamiento, controles de síntomas, entre otras.</p>    
                </div>
            <div className={styles.Service}>
            <FontAwesomeIcon icon={faShoppingCart} 
                className={styles.Icon}/>
                <h3>Carros de compra</h3>
                <p>Acerca tus productos a tus clientes a través de un carro de compras moderno y fácil de usar.</p>
            </div>
        </div>
    )

}

export default Servicios