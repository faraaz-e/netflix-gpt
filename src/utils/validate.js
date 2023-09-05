export const validateData = (name, email, password) => {
  const isNameValid = name == null || name.length > 3 ? true : false;

  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  const isEmailValid = emailRegex.test(email);

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const isPasswordValid = passwordRegex.test(password);

  if (!isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid) return "Invalid Password";

  return null;
};
