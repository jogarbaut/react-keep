const Note = ({ note }) => {
  return (
    <article className="note">
      <h2>{note.title && note.title}</h2>
      <p className="noteDate">Created: {note.dateTime}</p>
      <p className="noteBody">{note.body && note.body}</p>
    </article>
  );
};

export default Note;
