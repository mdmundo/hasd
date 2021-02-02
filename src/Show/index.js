import { useContext } from 'react';
import Presenter, { Lyrics } from './Presenter';
import Loader from './Loader';
import context from '../context';

const App = () => {
  const { state } = useContext(context);

  return (
    <div>
      {state.mode === 'lyrics' ? (
        <Lyrics />
      ) : state.hymnURI ? (
        <Presenter />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default App;
