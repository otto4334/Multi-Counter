import './App.css';
import { Header } from './components/Header';
import { Description } from './components/Description';
import { Counter } from './components/Counter';
import { Counters } from './components/Counters';

function App() {
  return (
<>
<Header />
<Description />
<Counter title = {"Counter 1"}/>
<Counter title = {"Counter 2"}/>
<Counter title = {"Counter 3"}/>
<Counters />
</>
  );
}

export default App;
