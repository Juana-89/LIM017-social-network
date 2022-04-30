/* eslint-disable no-useless-escape */
/* eslint-disable default-case */
export const expressions = {
  user: /^[a-zA-Z0-9\_\-]{4,16}$/,
  name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
  password: /^.{6,12}$/,
  email: /^\w+@\w+\.+[a-z]/,
};

export const validationFields = (expression, input, field) => {
  if (expression.test(input.value)) {
    document.querySelector(`#form_div_group_${field}`).classList.add('form_group_info_user-correct');
    document.querySelector(`#form_div_group_${field}`).classList.remove('form_group_info_user-incorrect');
  } else {
    document.querySelector(`#form_div_group_${field}`).classList.add('form_group_info_user-incorrect');
    document.querySelector(`#form_div_group_${field}`).classList.remove('form_group_info_user-correct');
  }
};

export const validationPassword = () => {
  const inpPassword1 = document.querySelector('#inp_password1');
  const inpPassword2 = document.querySelector('#inp_password2');

  if (inpPassword1.value === inpPassword2.value) {
    document.querySelector('#form_div_group_password2').classList.add('form_group_info_user-correct');
    document.querySelector('#form_div_group_password2').classList.remove('form_group_info_user-incorrect');
    document.querySelector('.form_input_error').classList.remove('form_input_error-active');
  } else {
    document.querySelector('#form_div_group_password2').classList.add('form_group_info_user-incorrect');
    document.querySelector('#form_div_group_password2').classList.remove('form_group_info_user-correct');
    document.querySelector('.form_input_error').classList.add('form_input_error-active');
  }
};

export const validationForm = (e) => {
  switch (e.target.name) {
    case 'user':
      // console.log('hola');
      validationFields(expressions.user, e.target, 'user');
      break;
    case 'realname':
      validationFields(expressions.name, e.target, 'realname');
      break;
    case 'email':
      // console.log('hola');
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
