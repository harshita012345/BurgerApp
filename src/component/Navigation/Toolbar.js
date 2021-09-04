import React from 'react';
import './Toolbar.css';
const Toolbar = (props) => {

    return (
        <div className='Toolbar'>
            <div>
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAALVBMVEW8ABb/xzbsjS2/CRfZVSP7uTTeYybnfSrJJRzEFhnPOB/1qTHxnS/ibyjURiHvA3BMAAABtElEQVRYhe1W246FIAxEKBdB/f/PXctFoBVxN9k358GYnnY6TCs5Qnz48OH/sBprXB9yZ2h9Ww8LwqomtMeQeVdvlgR5MSibQ/ub+gNbrfi0bX9QKAzm9atOlZh+pJDP6k8ePfcB1cascKanQ5Q3dXLLqYBL+lFcg8s+PIob114CfHzDfrFxKJqEW6YSYlXDBcmBUlW5RoDGfDzDJoRszN+ny7BV76Mdi0vPHEI14ak+Zl8aUbBBTeVQQi0TG7vsaEKQnXFhcoY+G/ICNyU2+TICzqDZd18IjisUOdVdba2o2aoQuFEGBRCPdCaoLdfnb1ISgVuqbwe3PJqguyEky8j2BpLSQVH6fLXYJiSfNsHTdkCnmEWNXATqUJ5jew2Zp7txpz+6ROBpE0srMyRtt9I1yKJGYwi0Xd6k9gaIokZj0MxhukdF1P0yK6Y3r+IkqVfX31iBC2a2VniubuMEerwIB9ObCPo7TNNRVQBvJzlBGG/SiKCf+jb+oA1v9zuC/T3B/S7fEFhOIBOB8nwXbrJVBCeQ4jDAGG4IbpAJvAW2TSBPTP/EGMwywvnx3fzhw4e/4AeCwwmPY8K6hgAAAABJRU5ErkJggg==' alt="#" />
            </div>
            <div>
                <img src='https://res.cloudinary.com/grubhub/image/upload/w_100,h_100,f_auto,fl_lossy,q_80,c_fit/fmpbzv6okkuc29lo0qpd' alt="#" />
            </div>
        </div>
    );
}

export default Toolbar;