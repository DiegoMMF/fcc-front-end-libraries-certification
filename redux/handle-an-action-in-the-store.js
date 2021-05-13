/* The code editor has the previous example as well as the start of a reducer function for you. Fill in the body of the reducer function so that if it receives an action of type 'LOGIN' it returns a state object with login set to true. Otherwise, it returns the current state. Note that the current state and the dispatched action are passed to the reducer, so you can access the action's type directly with action.type. */
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  const newState = {...state};
  switch (action.type) {
    case "LOGIN":
      newState.login = true;
    default:
      break;
  }
  return newState;
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};