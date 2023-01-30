import { PERSONAL_FORM, PROFESSIONAL_FORM, THEME_CHANGE } from './actionsTypes';

const submitPersonalForm = (personalProfile) => ({
  type: PERSONAL_FORM,
  payload: personalProfile,
});

const submitProfessionalForm = (professionalProfile) => ({
  type: PROFESSIONAL_FORM,
  payload: professionalProfile,
});

const themeChange = {
  type: THEME_CHANGE,
};

export { submitPersonalForm, submitProfessionalForm, themeChange };
