import { useContext } from 'react';
import ReactPlayer from 'react-player';
import { convert } from './timer';
import context from '../context';

const App = () => {
  const { state, dispatch } = useContext(context);

  const onEverySec = (time) => {
    dispatch({
      type: 'UPDATE',
      update: {
        timer: convert(time.playedSeconds),
        playedProgress: time.played * 100
      }
    });
  };

  //  copy of this on Presenter
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
    <ReactPlayer
      width={0}
      height={0}
      playing
      url={state.hymnURI}
      progressInterval={50}
      onProgress={onEverySec}
      onEnded={onFinished}
    />
  );
};

export default App;
