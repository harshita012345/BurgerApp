/* eslint-disable array-callback-return */
import React from 'react';
import BurgerIngredient from '../../component/Burger/BurgerIngredient/BurgerIngredient';
import './Burger.css';
import '../BurgerBuilder/BurgerBuilder.js';

class Burger extends React.Component {
    render() {
        let updatedIngredients = [];
        let ifEmpty = 'Add Ingredients';

        return (
            <div className="burger">
                {this.props.ingredients.map((elements, id) => {
                    for (let i = 1; i <= elements.qty; i++) {
                        updatedIngredients.push(
                            <div key={id} className={elements.name}></div>
                        )
                    }
                })}
                <BurgerIngredient type="bread-top" />
                {updatedIngredients.length ? updatedIngredients : ifEmpty}
                <BurgerIngredient type="bread-bottom" />
            </div>
        );
    }
}
export default Burger;