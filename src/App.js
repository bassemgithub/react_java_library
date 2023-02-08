
import './App.css';


import MySlect from './components/MySelect';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import NewBookForm from './components/AddBooksForm';


function App() {
  return (
    <div className="App">
        <BookContextProvider>
          <MySlect />
          <Navbar />
          <BookList />
          <NewBookForm/>
        </BookContextProvider>
    </div>
  );

}

export default App;

