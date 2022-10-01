import './App.css';
import Favorites from './components/favorites';
import Meals from './components/meals';
import Modal from './components/modal';
import Search from './components/search';

function App() {
  return (
    <main>
      <Search />
      <Meals />
      <Modal />
      <Favorites />
  </main>
  );
}

export default App;
