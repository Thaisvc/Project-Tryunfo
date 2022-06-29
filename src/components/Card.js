import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      name, description, attr1, attr2, attr3,
      image, rare, trunfo,
    } = this.props;
    return (
      <div className="card">
        <div><h2 data-testid="name-card">{ name }</h2></div>
        <div>
          <img data-testid="image-card" src={ image } alt={ name } />
        </div>
        <div><p data-testid="description-card">{ description }</p></div>
        <div>
          <div><p data-testid="attr1-card">{ attr1 }</p></div>
          <div><p data-testid="attr2-card">{ attr2 }</p></div>
          <div><p data-testid="attr3-card">{ attr3 }</p></div>
        </div>
        <div><h4 data-testid="rare-card">{ rare }</h4></div>
        { trunfo && (
          <div><p data-testid="trunfo-card">Super Trunfo</p></div>
        ) }
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  attr1: PropTypes.string.isRequired,
  attr2: PropTypes.string.isRequired,
  attr3: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rare: PropTypes.string.isRequired,
  trunfo: PropTypes.bool.isRequired,
};

export default Card;
