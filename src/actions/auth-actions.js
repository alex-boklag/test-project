export const loginAction = payload => {
  return {
    type: "SET_TOKEN",
    payload,
  };
};

export const logoutAction = () => {
  return {
    type: "REMOVE_TOKEN",
  };
};