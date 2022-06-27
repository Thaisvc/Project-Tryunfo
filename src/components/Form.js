import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.fileInput = React.createRef();
    this.state = {
      name: ' ',
      textarea: ' ',
      Attr01: ' ',
      Attr02: ' ',
      Attr03: ' ',
      select: 'selecione',
      checkbox: false,

    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    /* alert(
          `Selected file - ${this.fileInput.current.files[0].name}`,
        ); */
  }

  render() {
    const { name, textarea, Attr01, Attr02, Attr03, select, checkbox } = this.state;
    return (
      <form className="forms">

        <label htmlFor="id-name" data-testid="name-input">
          Nome:
          <input
            id="id-name"
            type="text"
            value={ name }
            name="name"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="id-textarea" data-testid="description-input">
          Descrição:
          <textarea
            id="id-textarea"
            value={ textarea }
            name="textarea"
            onChange={ this.handleChange }
          >
            Apenas algum texto em uma área de texto
          </textarea>
        </label>

        <label htmlFor="id-input-1" data-testid="attr1-input">
          Attr01:
          <input
            id="id-input-1"
            type="number"
            value={ Attr01 }
            name="Attr01"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="id-input-2" data-testid="attr2-input">
          Attr02:
          <input
            id="id-input-2"
            type="number"
            value={ Attr02 }
            name="Attr02"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="id-input-3" data-testid="attr3-input">
          Attr03:
          <input
            id="id-input-3"
            type="number"
            value={ Attr03 }
            name="Attr03"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="id-imagem" data-testid="image-input">
          Imagem:
          <input
            id="id-imagem"
            type="file"
            ref={ this.fileInput }
            name="imagem"
            onChange={ this.handleChange }
          />
        </label>

        <span> Pontos Restantes = 000 </span>

        <label htmlFor="id-select">
          Raridade:
          <select
            data-testid="rare-input"
            id="id-select"
            type="file"
            value={ select }
            name="select"
            onChange={ this.handleChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option selected value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="id-checkbox" data-testid="trunfo-input">
          Super Trybe Trunfo:
          <input
            id="id-checkbox"
            type="checkbox"
            value={ checkbox }
            name="checkbox"
            onChange={ this.handleChange }
          />
        </label>

        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
