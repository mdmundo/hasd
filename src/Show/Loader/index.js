import { useEffect, useContext } from 'react';
import { getHymn } from './hymn';
import { getPath } from './parser';
import context from '../../context';

const App = () => {
  const { state, dispatch } = useContext(context);
  const path = getPath(state.hymn);

  useEffect(() => {
    getHymn(path, dispatch).then((hymnURI) => {
      dispatch({
        type: 'UPDATE_HYMN_URI',
        hymnURI
      });
    });
  }, [path, dispatch]);

  return (
    <div>
      <pre>Progress: {state.progress.toFixed(1)}%</pre>
    </div>
  );
};

export default App;
