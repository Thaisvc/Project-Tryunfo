import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const stadeInicial = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ...stadeInicial,
      hasTrunfo: false,
      cardCollection: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validateCard = this.validateCard.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => this.validateCard());
  }

  onSaveButtonClick() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
    } = this.state;
    const cardInfo = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    if (!hasTrunfo) this.setState({ hasTrunfo: cardTrunfo });
    this.setState((prevState) => ({
      ...stadeInicial,
      cardCollection: [...prevState.cardCollection, cardInfo],
    }));
  }

  validateCard() {
    const {
      cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3,
    } = this.state;
    const maxValue = 90;
    const maxSum = 210;
    const conditions = [
      cardName.length > 0,
      cardDescription.length > 0,
      cardImage.length > 0,
      cardAttr1 >= 0 && cardAttr1 <= maxValue,
      cardAttr2 >= 0 && cardAttr2 <= maxValue,
      cardAttr3 >= 0 && cardAttr3 <= maxValue,
      Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxSum,
    ];
    this.setState({ isSaveButtonDisabled: !conditions.every((con) => con) });
  }

  render() {
    const { cardCollection } = this.state;
    return (
      <div className="App">
        <h1>Tryunfo</h1>
        <div className="new-card-area">
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card { ...this.state } />
        </div>
        <div className="cards-list">
          { cardCollection.map((card) => (
            <Card key={ card.cardName } { ...card } />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
