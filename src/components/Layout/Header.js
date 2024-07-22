import "./Header.css";
import sushi from "../../assets/M1.Boominfo.ORG - 003 sushi.jpg"
import styles from "./Header.css"
const Header = (props) => {
    return <React.Fragment>
        <header className={styles.header}>
            <h1>Япона кухня</h1>
            <button>Корзина</button>
        </header>
        <div className={styles['main-image']}>
            <img src={sushi} alt="Логотип"/>
        </div>
    </React.Fragment>
};
export default Header;
