// localStorageService.js

export const storeUserData = (userData) => {
  localStorage.setItem('userData', JSON.stringify(userData));
};

export const getUserData = () => {
  const userDataString = localStorage.getItem('userData');
  return userDataString ? JSON.parse(userDataString) : null;
};

export const setCompanyData = (company) => {

  const userData = getUserData();
  localStorage.removeItem('userData');

  if (userData) {

    userData.company = company;
    storeUserData(userData)

  }

};




export const removeUserData = () => {
  localStorage.clear();
};


