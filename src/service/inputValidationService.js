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

export const validateUpdateUser = (toUpdate) => {
  const validationPatterns = {
    name: /^[a-zA-Z\s-']{2,50}$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    biography: /^[\s\S]{0,500}$/,
    githubUrl: /^https:\/\/github\.com\/[a-zA-Z0-9-]+$/,
    role: /^(STUDENT|TEACHER)$/,
    mobile: /^\+?[1-9]\d{1,14}$/
  };

  const validateField = (field, value, pattern) => {
    if (value === undefined || value === null || value === '') return true;
    return pattern.test(value);
  };
  // Validate input fields
  const validationErrors = {};

  if (
    toUpdate.firstName &&
    !validateField('firstName', toUpdate.firstName, validationPatterns.name)
  ) {
    validationErrors.firstName = 'Invalid first name format';
  }
  if (toUpdate.lastName && !validateField('lastName', toUpdate.lastName, validationPatterns.name)) {
    validationErrors.lastName = 'Invalid last name format';
  }
  if (toUpdate.email && !validateField('email', toUpdate.email, validationPatterns.email)) {
    validationErrors.email = 'Invalid email format';
  }
  if (
    toUpdate.biography &&
    !validateField('biography', toUpdate.biography, validationPatterns.biography)
  ) {
    validationErrors.biography = 'Biography must not exceed 500 characters';
  }
  if (
    toUpdate.githubUrl &&
    !validateField('githubUrl', toUpdate.githubUrl, validationPatterns.githubUrl)
  ) {
    validationErrors.githubUrl = 'Invalid GitHub URL format';
  }
  if (
    toUpdate.password &&
    !validateField('password', toUpdate.password, validationPatterns.password)
  ) {
    validationErrors.password =
      'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*#?&)';
  }
  if (toUpdate.role && !validateField('role', toUpdate.role, validationPatterns.role)) {
    validationErrors.role = 'Invalid role';
  }
  if (toUpdate.mobile && !validateField('mobile', toUpdate.mobile, validationPatterns.mobile)) {
    validationErrors.mobile = 'Invalid mobile number format';
  }

  // Check for validation errors
  if (Object.keys(validationErrors).length > 0) {
    let errormsg = '';
    Object.keys(validationErrors).forEach(
      (key) => (errormsg = errormsg + validationErrors[key] + '\n')
    );
    return {
      isValid: false,
      message: errormsg
    };
  }

  return {
    isValid: true,
    message: ''
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
