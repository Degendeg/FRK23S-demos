import React, { useContext } from 'react'; // Importera React och useContext-hooken från react-biblioteket
import { BookContext } from '../context/BookContextProvider'; // Importera BookContext från BookContextProvider.jsx

const Header = () => { // Definiera en funktionell komponent för sidhuvudet
  const { books } = useContext(BookContext); // Använd useContext-hooken för att få tillgång till books-arrayen från BookContext

  return (
    <div className="header">
      <h1>My Reading List</h1>
      <p>
        Currently you have {" "}
        <strong className={books.length > 0 ? 'strong--no-of-books' : 'strong--books-empty'}>
          {books.length}
        </strong>
        {" "} books to read
      </p>
    </div>
  );
}

export default Header;