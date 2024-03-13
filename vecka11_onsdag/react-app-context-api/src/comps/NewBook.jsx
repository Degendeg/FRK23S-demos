import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContextProvider';

const NewBookForm = () => { // Definiera en funktionell komponent för formuläret för att lägga till en ny bok
  const { dispatch } = useContext(BookContext); // Använd useContext-hooken för att få tillgång till BookContext och dess dispatch-funktion
  const [title, setTitle] = useState(''); // Skapa ett state för bokens titel med useState-hook
  const [author, setAuthor] = useState(''); // Skapa ett state för bokens författare med useState-hook

  const handleSubmit = (e) => { // Funktion för att hantera inlämning av formuläret
    e.preventDefault(); // Förhindra standardformulärbeteende från att ladda om sidan
    dispatch({ type: 'ADD_BOOK', book: { title, author } }); // Skicka en ADD_BOOK-åtgärd till dispatch-funktionen med bokens titel och författare
    setTitle(''); // Återställ titelfältet till tomt efter inlämning
    setAuthor(''); // Återställ författarfältet till tomt efter inlämning
  }

  return (
    <form onSubmit={handleSubmit}> {/* Rendera ett formulär som kör handleSubmit-funktionen när det skickas in */}
      <input type="text" placeholder="book title" value={title} // Titelfältet med värde bundet till title-state och onChange-händelse för att uppdatera title-state
        onChange={(e) => setTitle(e.target.value)} required /> {/* Kräv att fältet inte är tomt */}
      <input type="text" placeholder="author name" value={author} // Författarfältet med värde bundet till author-state och onChange-händelse för att uppdatera author-state
        onChange={(e) => setAuthor(e.target.value)} required /> {/* Kräv att fältet inte är tomt */}
      <input type="submit" value="add book" /> {/* Skapa en knapp för att skicka in formuläret */}
    </form>
  );
}

export default NewBookForm;