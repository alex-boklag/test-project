export function reducer(state, action) {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, token: action.payload.token };
    case 'REMOVE_TOKEN':
      return { ...state, token: "" };
    default:
      return state;
  }
}