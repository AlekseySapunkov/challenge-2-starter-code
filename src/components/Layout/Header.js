import React from "react";
import sushi from "../../assets/M1.Boominfo.ORG - 003 sushi.jpg"
import styles from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    return <React.Fragment>
        <header className={ styles.header }>
            <h1>Япона кухня</h1>
            <HeaderCartButton onClick = {props.onSowCart}/>
        </header>
        <div className={styles['main-image']}>
            <img src={sushi} alt="Логотип"/>
        </div>
    </React.Fragment>
};
export default Header;
