import { useReducer } from 'react';
import Player from './Player';
import Context from './context';
import reducer from './reducer';

const App = () => {
  const defaultState = { hymn: { type: 'sung', number: 1 }, timer: '0:00' };

  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Player />
    </Context.Provider>
  );
};

export default App;
