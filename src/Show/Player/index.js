import { useContext } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { convert } from './timer';
import context from '../../context';

const App = () => {
  const { state, dispatch } = useContext(context);

  const onEverySec = (time) => {
    dispatch({
      type: 'UPDATE',
      update: {
        timer: convert(time)
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
