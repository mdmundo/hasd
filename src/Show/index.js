import { useContext } from 'react';
import Player from './Player';
import Presenter from './Presenter';
import Loader from './Loader';
import context from '../context';

const App = () => {
  const { state } = useContext(context);

  return (
    <div>
      {state.hymnURI ? (
        <div>
          <Presenter />
          <Player />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default App;
