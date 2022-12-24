function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    if (firstName && lastName) {
      const data = {
        firstName,
        lastName,
      };

      resolve(data);
    } else {
      reject();
    }
  });
}

export default signUpUser;
