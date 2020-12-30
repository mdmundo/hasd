const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_HYMN':
      return { ...state, hymn: action.hymn };
    case 'UPDATE_TIMER':
      return { ...state, timer: action.timer };
    case 'UPDATE_FINISHED':
      return { ...state, finished: action.finished };
    default:
      return state;
  }
};

export { reducer as default };
