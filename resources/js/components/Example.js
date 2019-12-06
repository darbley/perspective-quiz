import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        return (
            <div className="container">
            <div className="content">
                <h1>Discover Your Perspective</h1>
                <p>Complete the 7 min test and get a detailed report of your lenses on the world.</p>
                <form id="perspective-test">

                    <input type="email" required />
                </form>
            </div>
        </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
