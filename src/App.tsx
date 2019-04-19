import React, {Component} from 'react';
import './App.scss';
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
