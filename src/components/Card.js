import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3, cardRare, cardTrunfo,
    } = this.props;
    return (
      <div className="card">
        <div><h2 data-testid="name-card">{ cardName }</h2></div>
        <div>
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        </div>
        <div><p data-testid="description-card">{ cardDescription }</p></div>
        <div>
          <div><p data-testid="attr1-card">{ cardAttr1 }</p></div>
          <div><p data-testid="attr2-card">{ cardAttr2 }</p></div>
          <div><p data-testid="attr3-card">{ cardAttr3 }</p></div>
        </div>
        <div><h4 data-testid="rare-card">{ cardRare }</h4></div>
        { cardTrunfo && (
          <div><p data-testid="trunfo-card">Super Trunfo</p></div>
        ) }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
