import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';
import { submitPersonalForm, themeChange } from '../redux/actions/profilee';
import './PersonalForm.css';
import sun from '../img/sun.svg';
import moon from '../img/moon.svg';

const UF_LIST = [
  'Rio de Janeiro',
  'Minas Gerais',
  'Amapá',
  'Amazonas',
  'São Paulo',
  'Ceará',
  'Distrito Federal',
];

class PersonalForm extends Component {
  state = {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    uf: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { history, dispatch } = this.props;
    dispatch(submitPersonalForm(this.state));
    history.push('/professionalform');
  };

  handleImg = () => {
    const { dispatch } = this.props;
    dispatch(themeChange);
  };

  render() {
    const { name, email, cpf, address, city, uf } = this.state;
    const { stateTheme } = this.props;
    return (
      <div className={ stateTheme === 'dark' ? 'dark1' : 'light1' }>
        <form
          onSubmit={ () => console.log('Ao clicar, envie a informação do formulário') }
        >
          <div className={ stateTheme === 'dark' ? 'dark2' : 'light2' }>
            <button
              type="button"
              onClick={ this.handleImg }
            >
              <img src={ stateTheme === 'dark' ? sun : moon } alt="oi" />

            </button>
            <h1 className="title">Informações Pessoais</h1>
            <Input
              label="Nome: "
              type="text"
              onChange={ this.handleChange }
              value={ name }
              name="name"
              required
            />
            <Input
              label="Email: "
              type="text"
              onChange={ this.handleChange }
              value={ email }
              name="email"
              required
            />
            <Input
              label="Cpf: "
              type="text"
              onChange={ this.handleChange }
              value={ cpf }
              name="cpf"
              required
            />
            <Input
              label="Endereço: "
              type="text"
              onChange={ this.handleChange }
              value={ address }
              name="address"
              required
            />
            <Input
              label="Cidade: "
              type="text"
              onChange={ this.handleChange }
              name="city"
              value={ city }
            />
            <Select
              defaultOption="Selecione"
              onChange={ this.handleChange }
              value={ uf }
              label="Estado: "
              name="uf"
              options={ UF_LIST }
            />
            <Button
              type="button"
              label="Enviar"
              moreClasses="is-fullwidth is-info"
              onClick={ this.handleClick }
            />
          </div>
        </form>
      </div>
    );
  }
}

PersonalForm.propTypes = {
  dispatch: PropTypes.func,
  stateTheme: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  stateTheme: state.xablau.theme,

});

export default connect(mapStateToProps)(PersonalForm);
