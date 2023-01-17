import { NoteProvider } from './context/NoteContext';

import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NoteProvider>
        <Nav />
        <Home />
      </NoteProvider>
      <Footer />
    </div>
  );
}

export default App;
