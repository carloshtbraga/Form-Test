import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const { name, email, cpf,
      address, city, uf, curriculum, job, description, stateTheme } = this.props;
    // Recupere as informações do seu estado criado no Redux
    return (
      <div className={ stateTheme === 'dark' ? 'dark1' : 'light1' }>
        <section>
          <div className={ stateTheme === 'dark' ? 'dark2' : 'light2' }>
            <h1>Dados Enviados</h1>
            <div>
              Nome:
              { name }
            </div>
            <div>
              Email:
              { email }
            </div>
            <div>
              CPF:
              { cpf }
            </div>
            <div>
              Endereço:
              { address }
            </div>
            <div>
              Cidade:
              { city }
            </div>
            <div>
              Estado:
              { uf }
            </div>
            <div>
              Currículo:
              { curriculum }
            </div>
            <div>
              Cargo:
              { job }
            </div>
            <div>
              Descrição do cargo:
              { description }
            </div>
          </div>
        </section>
      </div>
    );
  }
}

FormDataDisplay.propTypes = {
  stateTheme: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  curriculum: PropTypes.string.isRequired,
  uf: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.xablau.personal,
  ...state.xablau.professional,
  stateTheme: state.xablau.theme,
});

export default connect(mapStateToProps)(FormDataDisplay);
