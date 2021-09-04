import React from 'react';
import Burger from '../Burger/Burger';
import Buildcontrols from '../Burger/Buildcontrols/Buildcontrols';
import Model from '../UI/Model/Model';
import Toolbar from '../Navigation/Toolbar';

class BurgerBuilder extends React.Component {
    constructor() {
        super();
        this.state = {
            ingredients: [
                { id: 1, name: 'salad', label: 'Salad', qty: 0, price: 5, disabled: true },
                { id: 2, name: 'bacon', label: 'Bacon', qty: 0, price: 3, disabled: true },
                { id: 3, name: 'cheese', label: 'Cheese', qty: 0, price: 10, disabled: true },
                { id: 4, name: 'meat', label: 'Meat', qty: 0, price: 7, disabled: true },
            ],
            totalPrice: 10,
            isModelOpen: false

        }
        
        this.addItem = (type) => {
            const updatedIngredients = this.state.ingredients.map(elements => {
                if (elements.name === type) {
                    elements.qty++;
                    elements.disabled = false;
                }
                this.setState({
                    totalPrice: this.state.totalPrice + elements.price
                })
                return elements;
            });
            this.setState({
                ingredients: [].concat(updatedIngredients),
            });
        }

        this.removeItem = (type) => {
            const updatedIngredients = this.state.ingredients.map(elements => {
                if (elements.name === type) {
                    if (elements.qty > 0) {
                        elements.qty--;
                        elements.disabled = false;
                    }
                    this.setState({
                        totalPrice: this.state.totalPrice - elements.price
                    })
                    if (elements.qty === 0) {
                        elements.qty = 0;
                        elements.disabled = true;
                    }
                }
                return elements;
            });
            this.setState({
                ingredients: [].concat(updatedIngredients),
            });
        }

        this.openModel = () => {
            this.setState({
                isModelOpen: true
            })
        }

        this.closeModel = () => {
            this.setState({
                isModelOpen: false
            })
        }

        this.continuePurchase = () => {
            alert('You Purchased Burger')
            this.setState(
                {
                    ingredients: [
                        { name: 'salad', label: 'Salad', qty: 0, price: 5, disabled: true },
                        { name: 'bacon', label: 'Bacon', qty: 0, price: 3, disabled: true },
                        { name: 'cheese', label: 'Cheese', qty: 0, price: 10, disabled: true },
                        { name: 'meat', label: 'Meat', qty: 0, price: 7, disabled: true },
                    ],
                    totalPrice: 10,
                    isModelOpen: false
                })
        }
    }
    
    render() {
        return (
            <div>
                <Toolbar />
                {this.state.isModelOpen ? <Model ingredients={this.state.ingredients} isModelOpen={this.state.isModelOpen}
                    closeModel={this.closeModel} continuePurchase={this.continuePurchase} totalPrice={this.state.totalPrice} /> : null
                }
                <Burger ingredients={this.state.ingredients} />
                <Buildcontrols removeItem={this.removeItem} addItem={this.addItem} totalPrice={this.state.totalPrice}
                    ingredients={this.state.ingredients} openModel={this.openModel}/>
            </div>
        );
    }
}
export default BurgerBuilder;