import Player from './Player';

const App = () => {
  const hymn = { type: 'sung', number: 1 };
  return (
    <div>
      <Player hymn={hymn} />
    </div>
  );
};

export default App;
