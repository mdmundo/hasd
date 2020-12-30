import { useState, useContext } from 'react';
import context from '../context';

const App = () => {
  const { dispatch } = useContext(context);
  const [number, setNumber] = useState('');
  const [type, setType] = useState('sung');

  const onSubmit = (e) => {
    e.preventDefault();

    if (isNaN(number) || parseInt(number) < 1 || parseInt(number) > 613) return;

    dispatch({
      type: 'UPDATE_HYMN',
      hymn: { type, number }
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
          checked={type === 'sung'}
          onChange={(e) => setType(e.target.checked ? 'sung' : 'instrumental')}
          type='checkbox'
          name='instrumental'></input>
        <input type='submit' value='Submit'></input>
      </form>
    </div>
  );
};

export default App;
