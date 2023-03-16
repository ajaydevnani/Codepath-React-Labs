import './App.css';
import Calendar from './components/Calendar';

const App = () => {

  return (
    <div className="App">
      <h1>Ajay's Weekly Schedule</h1>
      <h2>Ajay's one week schedule shows his availability for the week.</h2>
      <Calendar />
    </div>
  )
}

export default App