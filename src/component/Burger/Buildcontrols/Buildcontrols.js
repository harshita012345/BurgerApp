import React from 'react';
import Buildcontrol from './Buildcontrol/Buildcontrol';
import './Buildcontrols.css';
import '../BurgerIngredient/BurgerIngredient';

class Buildcontrols extends React.Component {

    render() {
        return (
            <div className="buildcontrols">
                <p className="price">Current Calculated Price is : {this.props.totalPrice + ' RS'} </p>
                {this.props.ingredients.map(control => (
                    <Buildcontrol
                        key={control.name}
                        label={control.label}
                        addItem={() => this.props.addItem(control.name)}
                        removeItem={() => this.props.removeItem(control.name)}
                        isDisabled={control.disabled}
                    />
                ))}
                <button disabled={this.props.totalPrice === 10} onClick={this.props.openModel} className="btn btn-success">Order Burger</button>
            </div>
        );
    }
}
export default Buildcontrols;