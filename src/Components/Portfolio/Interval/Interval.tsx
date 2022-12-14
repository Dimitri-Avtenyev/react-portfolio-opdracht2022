import CurrentTime from './CurrentTime';
import RandomValue from './RandomValue';
import Timer from './Timer';

const App = () => {
  return (
    <div>
      <div><Timer/></div>
      <div><CurrentTime/></div>
      <div><RandomValue min={1} max={100}/></div>
      <div><RandomValue min={100} max={200}/></div>
    </div>
  );
}

export default App;
