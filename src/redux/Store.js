import { createStore } from "redux";

const initialState = {
  counter: 100,
  title: "Project React",
};

/**
 * IN REACT ACTION IS SPECIAL OBJECT
 * {type:'INC'}
 * {type:'DEC'}
 * {type:'WITHDRAW'}
 * {type:'DEPOSIT'}
 *
 * @param {} state
 * @param {*} action
 */
function MyReduer(state = initialState, action) {
  // TODO
  switch (action.type) {
    case "INC":
      state = { ...state, counter: state.counter + 100 };
      return state;

    case "DEC":
      state = { ...state, counter: state.counter - 100 };
      return state;

    default:
      return state;
  }
}

const store = createStore(MyReduer);
export default store;
