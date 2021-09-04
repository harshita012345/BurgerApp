import React from 'react';
import './Layout.css';

class Layout extends React.Component {
    render() {
        return (
            <div className="content">
                <main>{this.props.children}</main>
            </div>
        );
    }
}
export default Layout;