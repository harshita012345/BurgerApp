import React from 'react';
import './BurgerIngredient.css';

class BurgerIngredient extends React.Component {
    render() {
        let Ingredient ;

        switch (this.props.type) {
            case 'bread-top':
                Ingredient = (<div className="bread-top">
                    <div className="seeds"></div>
                    <div className="seeds1"></div>
                    <div className="seeds2"></div>
                </div>)
                break;

            case 'salad':
                Ingredient = <div className="salad"></div>
                break;

            case 'bacon':
                Ingredient = <div className="bacon"></div>
                break;

            case 'cheese':
                Ingredient = <div className="cheese"></div>
                break;

            case 'meat':
                Ingredient = <div className="meat"></div>
                break;
                
            case 'bread-bottom':
                Ingredient = <div className="bread-bottom"></div>
                break;

            default:
                Ingredient = null;
                break;
        }
        return Ingredient;
    }
}
export default BurgerIngredient;