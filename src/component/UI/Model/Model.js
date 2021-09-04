import React from 'react';
import './Model.css';

class Model extends React.Component {
    render() {
        return (

            <div>
                {this.props.isModelOpen} <div onClick={this.props.closeModal}></div>

                <div className='Model'>
                    <h6 className='heading'>You ordered burger with the following ingredients:</h6>
                    <ul className='list'>
                        {this.props.ingredients.map((elements) =>
                            <li key={elements.label}>{elements.label}: {elements.qty}</li>
                        )}
                    </ul>
                    <p className='heading'>Total Price: {this.props.totalPrice + ' RS'}</p>
                    <p className='list'>Do you want to continue?</p>
                    <button className="btn btn-success btn-sm" onClick={this.props.continuePurchase}> Continue </button>&emsp;

               <button className="btn btn-danger btn-sm" onClick={this.props.closeModel}> Cancel </button>

                </div>

            </div>

        );
    }
}
export default Model;