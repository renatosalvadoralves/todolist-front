import { api } from 'src/utils/api';
import * as yup from 'yup';

const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 300;
const UPPERCASE_CHARACTER_REGEX = /[A-Z]/;
const NUMBER_REGEX = /[0-9]/;
const MIN_DIFFERENT_CHARACTERS = 2;
const SPECIAL_CHARACTER_REGEX = /[!@#$&%:(){}.\-_^*?+[\]"',/;<>=\\`|~ ]/;

const EMAIL_REGEX = /^(?=.{1,64}@)((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;

const isPasswordValid = (value: any) => {
  if (
    !value ||
    value.length < MIN_PASSWORD_LENGTH ||
    value.length > MAX_PASSWORD_LENGTH
  ) {
    return false;
  }

  let countChars = 0;

  if (UPPERCASE_CHARACTER_REGEX.test(value)) {
    countChars += 1;
  }

  if (NUMBER_REGEX.test(value)) {
    countChars += 1;
  }

  if (SPECIAL_CHARACTER_REGEX.test(value)) {
    countChars += 1;
  }

  return countChars >= MIN_DIFFERENT_CHARACTERS;
};

function equalTo(ref: any, msg: any) {
  return yup.mixed().test({
    name: 'equalTo',
    exclusive: false,
    message: msg || '${path} must be the same as ${reference}',
    params: {
      reference: ref.path,
    },
    test: function (value: any) {
      return value === this.resolve(ref);
    },
  });
}
yup.addMethod(yup.string, 'equalTo', equalTo);

export const schema = yup.object().shape({
  name: yup.string().required('This field is required'),
  email: yup
    .string()
    .required('This field is required')
    .matches(EMAIL_REGEX, 'Invalid format')
    .max(100, 'Email is too long'),
  password: yup
    .string()
    .required('This field is required')
    .test('is-password-valid', 'Password is invalid', (value) =>
      isPasswordValid(value),
    ),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export interface IFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const signup = async (data: Omit<IFormInputs, 'confirmPassword'>) =>
  await api.post('/signup', data);
