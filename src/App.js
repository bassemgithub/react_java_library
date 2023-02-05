
import './App.css';


import MySlect from './components/MySelect';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ModalDialog from './components/modal/ModalDialog';


function App() {
  return (
    <div className="App">
        <BookContextProvider>
          <MySlect />
          <Navbar />
          <BookList />
          <ModalDialog/>
        </BookContextProvider>

        
    </div>
  );

}

export default App;

