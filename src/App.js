import './App.css';
import { BookList } from './components/BookList';
import { Favourites } from './components/Favourites';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <BookList />
      <Favourites />
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
