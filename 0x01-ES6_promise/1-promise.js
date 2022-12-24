function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const data = {
      status: 200,
      body: 'Success',
    };
    if (success) {
      resolve(data);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}

export default getFullResponseFromAPI;
