import * as yup from 'yup';

export const NAME_SCHEMA = yup
  .string()
  .matches(/^[A-Z][a-z]{0,15}$/, 'Имя должно начинаться с большой буквы')
  .required();

export const PASSWORD_SCHEMA = yup
  .string()
  .matches(
    /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$^&*-])/,
    'Password must contain upper and lower latin characters, numbers and symbols',
  )
  .matches(/^.{8,}$/, 'Password must contain  8 characters')
  .required();

export const SIGN_UP_SCHEMA = yup.object({
  firstname: NAME_SCHEMA,
  lastname: NAME_SCHEMA,
  displayname: NAME_SCHEMA,
  email: yup.string().email().required(),
  password: PASSWORD_SCHEMA,
  confirm_password: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const LOGIN_SCHEMA = yup.object({
  email: yup.string().email().required(),
  password: PASSWORD_SCHEMA,
});
