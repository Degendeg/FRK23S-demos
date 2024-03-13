import { createContext, useReducer, useEffect } from 'react'; // Importera createContext, useReducer och useEffect från react-biblioteket
import { BookReducer } from '../reducers/BookReducer'; // Importera BookReducer från BookReducer.jsx

export const BookContext = createContext(); // Skapa en kontext med createContext-funktionen

const BookContextProvider = (props) => { // Definiera en kontextleverantörskomponent för böcker
  const [books, dispatch] = useReducer( // Använd useReducer-hook för att hantera böcker och deras åtgärder med reducerfunktionen BookReducer
    BookReducer, // Reducerfunktionen som hanterar åtgärder för böcker
    [], // initial state för böcker, tom array
    () => { // Funktion som körs vid första renderingen för att initialisera state från localStorage
      const tempBooks = localStorage.getItem('books'); // Hämta böcker från localStorage
      return tempBooks ? JSON.parse(tempBooks) : []; // Returnera böckerna som antingen parsade JSON eller en tom array om det inte finns några sparade böcker
    }
  );

  useEffect(() => { // useEffect-hook för att synkronisera state med localStorage
    localStorage.setItem('books', JSON.stringify(books)); // Spara böckerna i localStorage som JSON-sträng
  }, [books]); // Uppdatera useEffect när böckerna förändras

  return (
    <BookContext.Provider value={{ books, dispatch }}> {/* Tillhandahåll state och dispatch-funktionen för böcker genom kontexten */}
      {props.children} {/* Rendera alla underliggande komponenter som barn till kontextleverantören */}
    </BookContext.Provider> // Slut på kontextleverantören för böcker
  );
}

export default BookContextProvider; // Exportera BookContextProvider-komponenten som standardexport för att kunna användas i andra filer