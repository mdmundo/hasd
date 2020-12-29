import { useContext, useState, useEffect } from 'react';
import context from '../context';
import hymns from './hymns';

const App = () => {
  const { state } = useContext(context);

  const hymn = hymns[state.hymn.number - 1];

  const [nextUpdate, setNextUpdate] = useState(0);
  const [current, setCurrent] = useState(-1);

  useEffect(() => {
    if (hymn.text[nextUpdate]?.attributes.show === state.timer) {
      setCurrent(nextUpdate);
      setNextUpdate(nextUpdate + 1);
    }
  }, [state.timer, nextUpdate, hymn.text]);

  return (
    <div>
      <p>number: {state.hymn.number}</p>
      <p>current: {current}</p>
      {current < 0 ? (
        <pre>
          {`${parseInt(hymn.attributes.number, 10)}
${hymn.attributes.title}
${hymn.attributes.author}
${hymn.attributes.verse}`}
        </pre>
      ) : (
        <pre>{hymn.text[current].text}</pre>
      )}
    </div>
  );
};

export default App;
