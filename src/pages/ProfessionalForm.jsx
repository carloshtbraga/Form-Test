import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { submitProfessionalForm } from '../redux/actions/profilee';

class ProfessionalForm extends Component {
  state = {
    curriculum: '',
    job: '',
    description: '',
  };

  handleChange = ({ target }) => {
    const { history } = this.props;
    const { name, value } = target;
    this.setState({ [name]: value });
    console.log(history);
  };

  handleClick = () => {
    const { history, dispatch } = this.props;
    dispatch(submitProfessionalForm(this.state));
    history.push('/formdisplay');
  };

  render() {
    const { curriculum, job, description } = this.state;
    const { stateTheme } = this.props;
    return (
      <div className={ stateTheme === 'dark' ? 'dark1' : 'light1' }>
        <form
          onSubmit={ () => console.log('Envia as informações para a store') }
        >
          <div className={ stateTheme === 'dark' ? 'dark2' : 'light2' }>

            <h1 className="title">Informações Profissionais</h1>
            <TextArea
              label="Resumo do currículo: "
              value={ curriculum }
              name="curriculum"
              maxLength="1000"
              onChange={ this.handleChange }
              required
              className="textarea"
            />
            <Input
              label="Cargo:"
              name="job"
              type="text"
              value={ job }
              onChange={ this.handleChange }
              required
              className="inputprofessionalform"
            />
            <TextArea
              label="Descrição do cargo: "
              name="description"
              maxLength="500"
              onChange={ this.handleChange }
              value={ description }
              required
              className="textarea"
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

ProfessionalForm.propTypes = {
  stateTheme: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  stateTheme: state.xablau.theme,

});

export default connect(mapStateToProps)(ProfessionalForm);
