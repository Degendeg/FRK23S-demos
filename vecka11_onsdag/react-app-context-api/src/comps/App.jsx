import Header from './Header';
import BookContextProvider from '../context/BookContextProvider'; // Importera BookContextProvider från filen BookContextProvider.jsx
import BookList from './BookList';
import NewBookForm from './NewBook';
import '../css/main.css';

function App() {
  return (
    <div className="app">
      <BookContextProvider> {/* Inkludera BookContextProvider för att tillhandahålla context för underliggande komponenter */}
        <Header />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App; // Exportera App-komponenten som standardexport för att kunna användas i andra filer