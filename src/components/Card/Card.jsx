import React from 'react';
import './Card.css';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.img} alt="" />
        <div className="card-body">
          <h2>{this.props.title}</h2>
          <h5>{this.props.author}</h5>
        </div>
      </div>
    );
  }
}

export default Card;
