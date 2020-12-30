import { useEffect, useState, useContext } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { getHymn } from './hymn';
import { getPath } from './parser';
import { convert } from './timer';
import context from '../../context';

const App = () => {
  const { state, dispatch } = useContext(context);
  const path = getPath(state.hymn);
  const [hymnURI, setHymnURI] = useState('');

  useEffect(() => {
    getHymn(path).then((gotHymnURI) => {
      setHymnURI(gotHymnURI);
    });
  }, [path]);

  const onEverySec = (time) => {
    dispatch({
      type: 'UPDATE_TIMER',
      timer: convert(time)
    });
  };

  const onFinished = () => {
    dispatch({
      type: 'UPDATE_FINISHED',
      finished: true
    });
  };

  return (
    <div>
      <ReactAudioPlayer
        src={hymnURI}
        autoPlay
        listenInterval={50}
        onListen={onEverySec}
        onEnded={onFinished}
      />
    </div>
  );
};

export default App;
