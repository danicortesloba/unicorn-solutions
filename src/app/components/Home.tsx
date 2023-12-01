import Image from 'next/image'
import logo from "../../../public/images/logo.png"
import styles from "./home.module.css"
const Home = () => {
    return (
      <div className={styles.Box}>
        
        <div className={styles.Turquoise}>
          <div className={styles.Textbox}>
            <h1>Unicorn Solutions te brinda <br></br>soluciones digitales para cada<br></br> necesidad de tu empresa</h1>
          </div>
        </div>
        <div></div>
      </div>
    );
  };
  
  export default Home;