export const loadStorage = key => {
  try {
    const checkingState = localStorage.getItem(key);

    return checkingState === null ? undefined : JSON.parse(checkingState);
  } catch (err) {
    console.error('Get state error: ', err);
  }
};

export const saveStorage = (key, value) => {
  try {
    const checkingState = JSON.stringify(value);
    localStorage.setItem(key, checkingState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};
