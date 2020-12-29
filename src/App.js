import { useReducer } from 'react';
import Player from './Player';
import Presenter from './Presenter';
import Context from './context';
import reducer from './reducer';

const App = () => {
  const defaultState = { hymn: { type: 'instrumental', number: 88 }, timer: '0:00' };

  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Player />
      <Presenter />
    </Context.Provider>
  );
};

export default App;
