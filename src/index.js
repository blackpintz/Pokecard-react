import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pokegame from "./Pokegame"

class App extends React.Component {
    render() {
        return (
            <div>
            <Pokegame />
            </div>
        )
    }
}






ReactDOM.render(<App />, document.getElementById('root'));

