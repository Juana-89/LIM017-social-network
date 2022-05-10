/* eslint-disable no-useless-escape */
/* eslint-disable default-case */
export const expressions = {
  email: /^\w+@\w+\.+[a-z]/,
  password: /^.{6,12}$/,
};

export const validationFields = (expression, input, field) => {
  if (expression.test(input.value)) {
    document.querySelector(`#form_div_group_${field}`).classList.add('form_group_info_user-correct');
    document.querySelector(`#form_div_group_${field}`).classList.remove('form_group_info_user-incorrect');
    document.querySelector(`#form_div_group_${field} .form_input_error`).classList.remove('form_input_error-active');
  } else {
    document.querySelector(`#form_div_group_${field}`).classList.add('form_group_info_user-incorrect');
    document.querySelector(`#form_div_group_${field}`).classList.remove('form_group_info_user-correct');
    document.querySelector(`#form_div_group_${field} .form_input_error`).classList.add('form_input_error-active');
  }
};

export const validationPassword = () => {
  const inpPassword1 = document.querySelector('#inp_password1');
  const inpPassword2 = document.querySelector('#inp_password2');

  if (inpPassword1.value === inpPassword2.value) {
    document.querySelector('#form_div_group_password2').classList.add('form_group_info_user-correct');
    document.querySelector('#form_div_group_password2').classList.remove('form_group_info_user-incorrect');
    document.querySelector('#form_div_group_password2 .form_input_error').classList.remove('form_input_error-active');
  } else {
    document.querySelector('#form_div_group_password2').classList.add('form_group_info_user-incorrect');
    document.querySelector('#form_div_group_password2').classList.remove('form_group_info_user-correct');
    document.querySelector('#form_div_group_password2 .form_input_error').classList.add('form_input_error-active');
  }
};

export const validationForm = (e) => {
  switch (e.target.name) {
    case 'email':
      validationFields(expressions.email, e.target, 'email');
      break;
    case 'password1':
      validationFields(expressions.password, e.target, 'password1');
      break;
    case 'password2':
      validationPassword();
      break;
  }
};
