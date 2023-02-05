import {useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { BookContext } from '../contexts/BookContext';


const MySlect = () => {
  const { listBook } = useContext(BookContext);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState('--Choose an option--');

  
  useEffect(() => {
     axios.get('http://localhost:8080/users').then(function (response) {
        // handle success
        setOptions(response.data);
      })
      .catch(function (error) {
        console.error(error);
      }); 
  }, []);

  const handleChange = (event) => {
    event.preventDefault();

    const userId=  event.target.options[event.target.selectedIndex].dataset.rc;
    localStorage.setItem("user_id", userId);
    listBook(userId);
    setSelected(event.target.value);
    /*axios.get('http://localhost:8080/books/'+userId).then(function (response) {
    // handle success
      console.log(response);
    })*/
    
  };

  return (
    <div>
      <select value={selected} onChange={handleChange}>
       <option key='0' value="--Choose an option--" data-rc="0"> --Choose an option--</option> 
         {options.map(option => (
          <option key={option.id} value={option.value} data-rc={option.id}> 
            {option.name + " " +option.surname}
          </option>
        ))}
        
      </select>
    </div>
  );
};

export default MySlect;