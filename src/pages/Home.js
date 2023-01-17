// Import context
import { useContext } from "react";
import NoteContext from "../context/NoteContext";

import NewNote from "../components/NewNote";
import PinnedNotesCollection from "../components/PinnedNotesCollection";
import UnpinnedNotesCollection from "../components/UnpinnedNotesCollection";

const Home = () => {
  const { searchResults, pinnedSearchResults, unpinnedSearchResults } = useContext(NoteContext);

  return (
    <main className="Home">
      <NewNote />
      {searchResults.length ? (
        <>
          <PinnedNotesCollection notes={pinnedSearchResults} />
          <UnpinnedNotesCollection notes={unpinnedSearchResults} />
        </>
      ) : (
        <p className="statusMsg">No notes to display.</p>
      )}
    </main>
  );
};

export default Home;
