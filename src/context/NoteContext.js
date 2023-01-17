// React hooks
import { createContext, useState, useEffect } from "react";

// Initialize empty context
const NoteContext = createContext({});

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notesList')) || []);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [pinnedSearchResults, setPinnedSearchResults] = useState([]);
  const [unpinnedSearchResults, setUnpinnedSearchResults] = useState([]);
  // const [label, setLabel] = useState("")
  // const [labelResults, setLabelResults] = useState([])
  // const [isLoading, setIsLoading] = useState
  // const [fetchError, setFetchError] = useState(null)

  // Initialize notes if user has previously local storage data for application
  useEffect(() => {
    localStorage.setItem('notesList', JSON.stringify(notes))
  }, [notes]);

  // Filter results based on search term
  useEffect(() => {
    const filteredResults = notes.filter((note) => note.body.toLowerCase().includes(search.toLowerCase()) || note.title.toLowerCase().includes(search.toLowerCase()));
    setSearchResults(filteredResults);
  }, [notes, search]);

  // Filter search results based if pinned
  useEffect(() => {
    const filteredResults = searchResults.filter((note) => note.pinned === true)
    setPinnedSearchResults(filteredResults)
  }, [notes, searchResults]);

  // Filter search results based if unpinned
  useEffect(() => {
    const filteredResults = searchResults.filter((note) => note.pinned !== true)
    setUnpinnedSearchResults(filteredResults)
  }, [notes, searchResults]);

  return (
    <NoteContext.Provider
      value={{
        notes,
        setNotes,
        search,
        setSearch,
        searchResults,
        pinnedSearchResults,
        unpinnedSearchResults
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContext;
