import { useContext } from 'react';
import Player from './Player';
import Presenter from './Presenter';
import context from '../context';

const App = () => {
  const { state } = useContext(context);

  return (
    <div>
      <pre>Progress: {state.progress.toFixed(1)}%</pre>
      <Player />
      <Presenter />
    </div>
  );
};

export default App;
