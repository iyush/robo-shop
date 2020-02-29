import React, { Component } from 'react';

import Card from './Card'
import './Cards.css'

class Cards extends Component {
    render() {
        return (
            <div className="cards">
                {this.props.items.map(item => {
                    return (
                        <Card
                            bio={item}
                            key={item.id}
                            onIncrement={this.props.onIncrement}
                            onDecrement={this.props.onDecrement}
                        />
                    );
                })}
            </div>
        );
    }


}
export default Cards;
