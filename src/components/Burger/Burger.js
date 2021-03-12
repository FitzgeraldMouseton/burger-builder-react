import React from "react";

import classes from './Burger.module.css'
import BurgerIngredient from "./Ingredient/BugrerIngredient";

// Класс, возвращающий репрезентацию бургера со всеми ингредиентами

const burger = props => {

    /*
    Берется из state в BurgerBuilder через поле ingredients={this.state.ingredients}
    ingredients в state - это объект, из которого нужно извлечь информацию.
    Сделать это можно сначала получив все ключи (названия ингредиентов),
    через обычный JavaScript'овский метод, а затем из полученных ключей получаем значения (кол-ва)
     */
    let transformedIngredients = Object.keys(props.ingredients).map(ingKey => {
        return [...Array(props.ingredients[ingKey])].map( (_, i) => {
            return <BurgerIngredient id={ingKey + i} type={ingKey} />
            });
    })

    // На данном этапе мы получили двумерный массив, сделаем его одномерным
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    console.log(transformedIngredients);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger;