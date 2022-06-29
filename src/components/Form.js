import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      // desestruturar hasTrunfo
      name, description, attr1, attr2, attr3,
      image, rare, trunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick, validateInfo,
    } = this.props;
    return (
      <form className="newCard-form">
        <fieldset className="newCard-container">
          <legend>Adicionar nova carta</legend>
          <label htmlFor="name-input">
            Nome
            <input
              type="text"
              data-testid="name-input"
              id="name-input"
              name="name"
              value={ name }
              onChange={ (e) => { onInputChange(e, validateInfo); } }
              placeholder="Nome da carta"
              className="info-area"
            />
          </label>
          <label htmlFor="description-input">
            Descrição
            <textarea
              data-testid="description-input"
              id="description-input"
              name="description"
              value={ description }
              onChange={ (e) => { onInputChange(e, validateInfo); } }
              className="info-area"
            />
          </label>
          <label htmlFor="attr1-input">
            Attr01
            <input
              type="number"
              data-testid="attr1-input"
              id="attr1-input"
              name="attr1"
              min="0"
              max="90"
              value={ attr1 }
              onChange={ (e) => { onInputChange(e, validateInfo); } }
              className="info-area"
            />
          </label>
          <label htmlFor="attr2-input">
            Attr02
            <input
              type="number"
              data-testid="attr2-input"
              id="attr2-input"
              name="attr2"
              min="0"
              max="90"
              value={ attr2 }
              onChange={ (e) => { onInputChange(e, validateInfo); } }
              className="info-area"
            />
          </label>
          <label htmlFor="attr3-input">
            Attr03
            <input
              type="number"
              data-testid="attr3-input"
              id="attr3-input"
              name="attr3"
              min="0"
              max="90"
              value={ attr3 }
              onChange={ (e) => { onInputChange(e, validateInfo); } }
              className="info-area"
            />
          </label>
          <label htmlFor="image-input">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              id="image-input"
              name="image"
              value={ image }
              onChange={ (e) => { onInputChange(e, validateInfo); } }
              className="info-area"
            />
          </label>
          <label htmlFor="rare-input">
            Raridade
            <select
              data-testid="rare-input"
              id="rare-input"
              name="rare"
              value={ rare }
              onChange={ (e) => { onInputChange(e, validateInfo); } }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input">
            <input
              type="checkbox"
              data-testid="trunfo-input"
              id="trunfo-input"
              name="trunfo"
              checked={ trunfo }
              onChange={ (e) => { onInputChange(e, validateInfo); } }
            />
            Super Trybe Trunfo
          </label>
          <button
            type="button"
            data-testid="save-button"
            id="save-button"
            name="isSaveButtonDisabled"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </fieldset>
      </form>
    );
  }
}

Form.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  attr1: PropTypes.string.isRequired,
  attr2: PropTypes.string.isRequired,
  attr3: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rare: PropTypes.string.isRequired,
  trunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  validateInfo: PropTypes.func.isRequired,
};

export default Form;
