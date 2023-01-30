import { PERSONAL_FORM, PROFESSIONAL_FORM, THEME_CHANGE } from '../actions/actionsTypes';

const initialState = {
  personal: {
    name: '',
    email: '',
    cpf: '',
    city: '',
    uf: '',
    address: '',
  },
  professional: {
    curriculum: '',
    job: '',
    description: '',
  },
  theme: 'light',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
  case PERSONAL_FORM:
    return { ...state, personal: { ...action.payload } };

  case PROFESSIONAL_FORM:
    return { ...state, professional: { ...action.payload } };
  case THEME_CHANGE:
    return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };

  default:
    return state;
  }
};

export default profileReducer;
