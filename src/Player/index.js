import React, { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { getHymn } from './hymn';
import { getPath } from './parser';

const App = (props) => {
  const path = getPath(props.hymn);
  const [hymnURI, setHymnURI] = useState('');

  useEffect(() => {
    getHymn(path).then((gotHymnURI) => {
      setHymnURI(gotHymnURI);
    });
  }, [path]);

  const onEverySec = (time) => {
    // console.log(time);
  };

  return (
    <div>
      <ReactAudioPlayer
        src={hymnURI}
        autoPlay
        listenInterval={100}
        onListen={onEverySec}
      />
    </div>
  );
};
export default App;
