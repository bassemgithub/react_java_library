
import './App.css';

import {useState} from 'react';
import MySlect from './components/MySelect';

/*
const App = () => {
  const options = [
    {value: '', text: '--Choose an option--'},
    {value: 'apple', text: 'Apple 🍏'},
    {value: 'banana', text: 'Banana 🍌'},
    {value: 'kiwi', text: 'Kiwi 🥝'},
  ];

  const [selected, setSelected] = useState(options[0].value);

  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <div>
      <select value={selected} onChange={handleChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};
*/
function App() {
  return (
    <div className="App">
        <MySlect />
    </div>
  );

}

export default App;

