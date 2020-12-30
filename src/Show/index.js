import { useContext } from 'react';
import Player from './Player';
import Presenter from './Presenter';
import Loader from './Loader';
import context from '../context';

const App = () => {
  const { state, dispatch } = useContext(context);

  //  copy of this on Player
  const onFinished = () => {
    dispatch({
      type: 'UPDATE',
      update: {
        hymnURI: '',
        finished: true
      }
    });
  };

  return (
    <div>
      <button onClick={onFinished}>Back</button>
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
