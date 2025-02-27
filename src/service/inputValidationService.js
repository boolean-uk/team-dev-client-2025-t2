import validator from 'validator';

export const validEmail = (email) => {
  if (validator.isEmail(email)) {
    return {
      isValid: true,
      message: ''
    };
  } else {
    return {
      isValid: false,
      message: 'Invalid email format'
    };
  }
};

export const validPassword = (password) => {
  if (password.length < 8) {
    return {
      isValid: false,
      message: 'Password must be at least 8 characters long'
    };
  }
  if (!/[A-Za-z]/.test(password)) {
    return {
      isValid: false,
      message: 'Password must contain at least one letter'
    };
  }
  if (!/[A-Z]/.test(password)) {
    return {
      isValid: false,
      message: 'Password must contain at least one uppercase letter'
    };
  }
  if (!/\d/.test(password)) {
    return {
      isValid: false,
      message: 'Password must contain at least one number'
    };
  }
  if (!/[@$!%*?&]/.test(password)) {
    return {
      isValid: false,
      message: 'Password must contain at least one special character'
    };
  }

  return {
    isValid: true,
    message: 'Success'
  };
};
export const validFirstName = (firstName) => {
  if (firstName.length < 1) {
    return {
      isValid: false,
      message: 'First name is required'
    };
  }
};
export const validLastName = (lastName) => {
  if (lastName.length < 1) {
    return {
      isValid: false,
      message: 'last name is required'
    };
  }
};
