import { useContext } from 'react';
import context from '../../context';

import Plyr from 'plyr-react';
import './plyr.css';

const App = () => {
  const { URIState } = useContext(context);

  const audioOptions = {
    invertTime: false,
    tooltips: { controls: false, seek: false },
    keyboard: { focused: false, global: false },
    autoplay: true,
    controls: ['play', 'progress', 'current-time']
  };

  const audioSource = {
    type: 'audio',
    title: 'Hino',
    sources: [
      {
        src: URIState
      }
    ]
  };

  return <Plyr source={audioSource} options={audioOptions} />;
};

export default App;
