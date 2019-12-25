import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIncredients = Object.keys(props.ingredients)
        .map( igKey  => [...Array(props.ingredients[igKey])]
        .map((_,i) => <BurgerIngredient key={igKey+i} type={igKey} />))
        .reduce((arr,el) => arr.concat(el),[]);
    if(transformedIncredients.length === 0) {
        transformedIncredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIncredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;