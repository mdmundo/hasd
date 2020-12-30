const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      return { ...state, ...action.update };
    default:
      return state;
  }
};

export { reducer as default };
