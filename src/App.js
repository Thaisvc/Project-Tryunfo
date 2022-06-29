import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const INITIAL_STATE = {
  name: '',
  description: '',
  attr1: '0',
  attr2: '0',
  attr3: '0',
  image: '',
  rare: 'normal',
  trunfo: false,
  isSaveButtonDisabled: true,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ...INITIAL_STATE,
      cardCollection: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.checkCardInformations = this.checkCardInformations.bind(this);
  }

  onInputChange({ target }, validateInfo) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => validateInfo());
  }

  onSaveButtonClick() {
    const {
      name, description, attr1,
      attr2, attr3, image, trunfo,
    } = this.state;
    const cardInfo = {
      name, description, attr1, attr2, attr3, image, trunfo,
    };
    this.setState((prevState) => ({
      ...INITIAL_STATE,
      cardCollection: [...prevState.cardCollection, cardInfo],
    }));
  }

  checkCardInformations() {
    const {
      name, description, attr1,
      attr2, attr3, image,
    } = this.state;
    const maxValue = 90;
    const maxSum = 210;
    const conditions = [
      name.length > 0,
      description.length > 0,
      image.length > 0,
      attr1 >= 0 && attr1 <= maxValue,
      attr2 >= 0 && attr2 <= maxValue,
      attr3 >= 0 && attr3 <= maxValue,
      Number(attr1) + Number(attr2) + Number(attr3) <= maxSum,
    ];
    this.setState({ isSaveButtonDisabled: !conditions.every((con) => con) });
  }

  render() {
    return (
      <div className="App">
        <h1>Tryunfo</h1>
        <div className="homepage">
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            validateInfo={ this.checkCardInformations }
          />
          <Card { ...this.state } />
        </div>
      </div>
    );
  }
}

export default App;
