import { useContext } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { convert } from './timer';
import context from '../../context';

const App = () => {
  const { state, dispatch } = useContext(context);

  const onEverySec = (time) => {
    dispatch({
      type: 'UPDATE_TIMER',
      timer: convert(time)
    });
  };

  //  copy of this on Show
  const onFinished = () => {
    dispatch({
      type: 'UPDATE_HYMN_URI',
      hymnURI: ''
    });
    dispatch({
      type: 'UPDATE_FINISHED',
      finished: true
    });
  };

  return (
    <div>
      <ReactAudioPlayer
        src={state.hymnURI}
        autoPlay
        listenInterval={50}
        onListen={onEverySec}
        onEnded={onFinished}
      />
    </div>
  );
};

export default App;
