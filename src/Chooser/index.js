import { useState, useContext } from 'react';
import context from '../context';

const App = () => {
  const { dispatch } = useContext(context);
  const [number, setNumber] = useState('');
  const [sung, setSung] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();

    if (isNaN(number) || parseInt(number) < 1 || parseInt(number) > 613) return;

    dispatch({
      type: 'UPDATE_HYMN',
      hymn: { sung, number }
    });
    dispatch({
      type: 'UPDATE_TIMER',
      timer: '0:00'
    });
    dispatch({
      type: 'UPDATE_FINISHED',
      finished: false
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type='text'
          name='number'></input>
        <input
          checked={sung}
          onChange={(e) => setSung(e.target.checked)}
          type='checkbox'
          name='instrumental'></input>
        <input type='submit' value='Submit'></input>
      </form>
    </div>
  );
};

export default App;
