
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    case ADD_NOTE:
      return state = action.note;
    default:
      return state;
  }
};

const addNoteText = (note) => {
  const action = { type: ADD_NOTE, text: note };
  return action;
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());