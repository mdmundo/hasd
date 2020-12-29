import { useContext } from 'react';
import context from '../context';

const App = () => {
  const { state } = useContext(context);

  return (
    <div>
      <p>number: {state.hymn.number}</p>
    </div>
  );
};
export default App;
