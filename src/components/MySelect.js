import {useState, useEffect } from 'react';
import axios from 'axios';


const MySlect = () => {
  /*const options = [
    {value: '', text: '--Choose an option--'},
    {value: 'apple', text: 'Apple 🍏'},
    {value: 'banana', text: 'Banana 🍌'},
    {value: 'kiwi', text: 'Kiwi 🥝'},
  ];*/
  //const [options, setOptions] = useState([{ username: '--Choose an option--'  , key:0}]);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState('--Choose an option--');

  useEffect(() => {
     axios.get('http://localhost:8080/users').then(function (response) {
        // handle success
        setOptions(response.data);
        console.log(response.data);
      })
  }, []);

  const handleChange = event => {
    console.log( event.target.selectedOptions[0].index);
    setSelected(event.target.value);
    /*axios.get('http://localhost:8080/users').then(function (response) {
    // handle success
      console.log(response);
      let myData = document.getElementById("users").innerHTML;
      console.log("myData::", myData);
    })
*/
    
  };

  return (
    <div>
      <select value={selected} onChange={handleChange}>
        <option key='0' > --Choose an option--</option>
         {options.map(option => (
          <option key={option.id} value={option.value}>
            {option.username}
          </option>
        ))}
        
      </select>
    </div>
  );
};

export default MySlect;