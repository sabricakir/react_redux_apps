import './App.css';
import Counter from './components/Counter';
import IncreaseByOneCounter from './components/IncreaseByOneCounter';
import IncreaseByTwoCounter from './components/IncreaseByTwoCounter';
import DecreaseByOneCounter from './components/DecreaseByOneCounter';
import DecreaseByTwoCounter from './components/DecreaseByTwoCounter';

function App() {
  return (
    <div>
      <Counter />
      <IncreaseByOneCounter />
      <IncreaseByTwoCounter />
      <DecreaseByOneCounter />
      <DecreaseByTwoCounter />
    </div>
  );
}

export default App;
