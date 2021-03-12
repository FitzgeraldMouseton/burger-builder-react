import React from "react";

// Не получится просто указать путь к картинке в виде <img src={"../../"}/>, т.к. webpack все перепутает
// переложит, переименует и т.д..
import burgerLogo from '../../assets/images/28.1 burger-logo.png'
import classes from './Logo.module.css'

/*
 style={{height: props.height}} позволяет разным элементам, использующим лого, управлять его размерами
 <Logo height="11%"/>. Но мы используем другой метод. В css класса, использующего лого, добавляем
 код вида
 .Logo {
     height: 80%;
 }
 Где и указываем нужный размер. Затем в коде js класса используем конструкцию
 <div className={classes.Logo}>
    <Logo />
 </div>
 */



const logo = props => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="MyBurger"/>
    </div>
);

export default logo;