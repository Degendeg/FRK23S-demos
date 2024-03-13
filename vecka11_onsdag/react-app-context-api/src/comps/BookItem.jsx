import React, { useContext } from 'react'; // Importera React och useContext-hooken från react-biblioteket
import { BookContext } from '../context/BookContextProvider';

const BookDetails = ({ book }) => { // Definiera en funktionell komponent med props book
  const { dispatch } = useContext(BookContext); // Använd useContext-hooken för att få tillgång till BookContext och dess dispatch-funktion

  return (
    <>
      {/* Lägg till en klickhändelse som skickar ett REMOVE_BOOK-åtgärd till dispatch-funktionen med bokens id */}
      <li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
        <div className="title">{book.title}</div> {/* Rendera bokens titel */}
        <div className="author">{book.author}</div> {/* Rendera bokens författare */}
      </li>
    </>
  );
}

export default BookDetails;