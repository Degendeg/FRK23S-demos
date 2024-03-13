// Funktion för att generera unika identifierare (UUID)
const uuid = () => {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

// Reducerfunktion för att hantera åtgärder relaterade till böcker
export const BookReducer = (state, action) => {
  switch (action.type) { // Beroende på vilken typ av åtgärd som skickas till reducerfunktionen
    case 'ADD_BOOK': // Om åtgärden är att lägga till en bok
      return [...state, { // Returnera en ny array med alla befintliga böcker och den nya boken
        title: action.book.title, // Bokens titel
        author: action.book.author, // Bokens författare
        id: uuid() // Generera en unik identifierare för den nya boken, se ovan
      }];
    case 'REMOVE_BOOK': // Om åtgärden är att ta bort en bok
      return state.filter(book => book.id !== action.id); // Returnera en ny array med alla böcker utom den som har samma id som den som ska tas bort
    default: // Om åtgärden inte matchar någon av de förväntade typerna
      return state; // Returnera det aktuella statet oförändrat
  }
};
