import './App.css';
import Favorites from './components/favorites';
import Meals from './components/meals';
import Modal from './components/modal';
import Search from './components/search';
import { useGlobalContext } from './context';

function App() {
  const { showModal, favorites } = useGlobalContext()
  return (
    <main>
      <Search />
      <Meals />
      {showModal && <Modal />}
      {favorites.length > 0 && <Favorites />}
      
  </main>
  );
}

export default App;
