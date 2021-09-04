import React from 'react';
import './Buildcontrol.css';

class Buildcontrol extends React.Component {

    render() {
        return (
            <div className="buildcontrol">
                <div className="label">{this.props.label}</div>
                <button onClick={this.props.removeItem} className="btn btn-secondary" disabled={this.props.isDisabled}>Less</button>
                <button className="btn btn-primary" onClick={this.props.addItem}>More</button>
            </div>
        );
    }
}
export default Buildcontrol;