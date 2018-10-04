export default function createStore(reducer) {
  let state;

  //2. dispatch
  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  //1. getState
  function getState() {
    return state;
  }

  //INIT
  dispatch({ type: "@@INIT" });

  // return an object with 2 methods
  return {
    dispatch,
    getState
  };
}

function render() {
  const container = document.getElementById("container");
}
