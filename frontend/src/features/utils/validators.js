export const validateLoginForm = (username, password) => {
    return validateUsername(username) && password.length >= 3 && password.length < 49
  }
  
  export const validateRegisterForm = (username, password, repeatedPassword) => {
    return (
      validatePassword(password) &&
      validateUsername(username) &&
      password === repeatedPassword
    );
  };
  
  const validatePassword = (password) => {
    return password.length >= 3 && password.length < 49;
  };
  
  const validateUsername = (username) => {
    return username.length > 2 && username.length < 64;
  };
  