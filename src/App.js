import { useReducer } from 'react';
import Show from './Show';
import Chooser from './Chooser';
import Context from './context';
import reducer from './reducer';

const App = () => {
  const defaultState = {
    hymn: { type: 'sung', number: '' },
    timer: '0:00',
    finished: true
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {state.finished ? <Chooser /> : <Show />}
    </Context.Provider>
  );
};

export default App;
