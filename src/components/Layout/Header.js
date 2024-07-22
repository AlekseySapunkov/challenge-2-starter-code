import React from "react";
import sushi from "../../assets/M1.Boominfo.ORG - 003 sushi.jpg"
import styles from './Header.module.css'
console.log(styles)
const Header = (props) => {
    return <React.Fragment>
        <header className={ styles.header }>
            <h1>Япона кух</h1>
            <button>Корзина</button>
        </header>
        <div className={styles['main-image']}>
            <img src={sushi} alt="Логотип"/>
        </div>
    </React.Fragment>
};
export default Header;
