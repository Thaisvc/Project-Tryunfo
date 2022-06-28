import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.checkedForms = this.checkedForms.bind(this);
  }

  onInputChange = ({ target }, InfoValidate) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value },
    () => InfoValidate());
  }

  checkedForms() {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
    } = this.state;

    const Value = 90;
    const sum = 210;

    const conditions = [
      cardName.length > 0,
      cardDescription.length > 0,
      cardImage.length > 0,
      cardAttr1 >= 0 && cardAttr1 <= Value,
      cardAttr2 >= 0 && cardAttr2 <= Value,
      cardAttr3 >= 0 && cardAttr3 <= Value,
      Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= sum,
    ];
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every
    this.setState({ isSaveButtonDisabled: !conditions.every((condition) => condition) });
  }

  render() {
    const { cardName,
      cardImage,
      cardDescription,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled } = this.state;
    return (
      <>
        <h1>Tryunfo</h1>
        <Form
          onSaveButtonClick={ this.callback }
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          hasTrunfo={ hasTrunfo }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          InfoValidate={ this.checkedForms }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </>
    );
  }
}

export default App;
