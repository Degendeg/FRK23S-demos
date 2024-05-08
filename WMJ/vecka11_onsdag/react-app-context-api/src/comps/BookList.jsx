import React, { useContext } from 'react'
import BookItem from './BookItem';
import { BookContext } from '../context/BookContextProvider';

const BookList = () => { // Definiera en funktionell komponent för att rendera listan över böcker
  const { books } = useContext(BookContext); // Använd useContext-hooken för att få tillgång till books-arrayen från BookContext

  return (
    <>
      {books.length ? ( // Kontrollera om det finns böcker i books-arrayen
        <div className="book-list">
          <ul>
            {books.map(book => { // Loopa varje bok i books-arrayen och skapa en BookItem-komponent för varje bok
              return (<BookItem book={book} key={book.id} />); // Skicka varje bok som en prop till BookItem-komponenten och använd bokens id som nyckel
            })}
          </ul>
        </div>
      ) : (
        // Om det inte finns några böcker, rendera ett meddelande om att det inte finns några böcker att läsa
        <div className="empty">No books to read.</div>
      )}
    </>
  );
}

export default BookList;