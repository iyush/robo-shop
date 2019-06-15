import React, { Component } from 'react';
import Cards from './components/Cards';
import Data from './data/Data'
import Cart from './components/Cart';
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: Data
        }
    }

    handleIncrement = (itemID) => {
        this.setState({
            items: this.state.items.map(i => {
                if (i.id === itemID) {
                    i.value++;
                }
                return i;
            })
        });
    }

    handleDecrement = (itemID) => {
        this.setState({
            items: this.state.items.map(i => {
                if (i.id === itemID) {
                    i.value = i.value <= 0 ? 0 : i.value - 1;
                }
                return i;
            })
        });
    }

    handleReset = () => {
        this.setState({
            items: this.state.items.map(i => {
                i.value = 0;
                return i;
            })
        })
    }

    render() {
        return (
            <div className="app">
                <h1> ROBO_SHOP </h1>
                <Cards
                    items={this.state.items}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
                <Cart
                    items={this.state.items}
                    onReset={this.handleReset}
                />
            </div>
        );
    }

}

export default App;