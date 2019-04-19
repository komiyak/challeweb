import React, {Component} from 'react';
import './App.css';
import Articles from './Articles';

class App extends Component {
    render() {
        return (
            <section className="section">
                <Articles/>
            </section>
        );
    }
}

export default App;
