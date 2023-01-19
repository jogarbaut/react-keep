import { useState } from 'react';

import { NoteProvider } from './context/NoteContext';

import CustomNav from './components/CustomNav';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  const [displayList, setDisplayList] = useState("notes-collection__list")

  return (
    <div className="App">
      <NoteProvider>
        <CustomNav displayList={displayList} setDisplayList={setDisplayList} />
        <Home displayList={displayList} />
      </NoteProvider>
      <Footer />
    </div>
  );
}

export default App;
