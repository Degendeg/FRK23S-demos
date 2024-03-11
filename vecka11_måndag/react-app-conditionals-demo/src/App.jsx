import { useState, useEffect } from 'react'; // Importing useState and useEffect hooks from React
import './App.css'; // Importing CSS file for styling

function App() {
  const [data, setData] = useState(null); // Initializing state variable 'data' using useState hook

  useEffect(() => {
    const getData = () => {
      // Function to fetch data from API
      fetch('https://jsonplaceholder.typicode.com/todos') // Fetching data from JSONPlaceholder API
        .then((res) => res.json()) // Converting response to JSON format
        .then((result) => setData(result)); // Updating state variable 'data' with fetched data
    };

    // setTimeout for demo purpose
    setTimeout(() => {
      getData(); // Calling getData function after a delay of 3000 milliseconds (3 seconds)
    }, 3000); // Delay in milliseconds
  }, []); // Empty dependency array indicates this effect runs only once after the initial render

  const validateData = () => {
    // Function to validate if data is available
    return data !== null && data.length > 0; // Returns true if data is not null and has length greater than 0
  };

  return (
    <>
      {/* 
        Conditional rendering based on data availability
        Logical operator &&
      */}
      {/* {data && <>
        {data.map((d, idx) => (
          <span key={idx}>{JSON.stringify(d)}</span>
        ))}
      </>} */}

      {/* 
        Conditional rendering based on data availability
        Ternary operator = condition ? true : false
      */}
      {validateData() ? ( // If data is available
        <>
          {data.map((d, idx) => (
            <span key={idx}>{JSON.stringify(d)}</span> // Rendering each data item as a <span> element with its JSON representation
          ))}
        </>
      ) : ( // If data is not available
        <>
          <h1 style={{ color: 'red' }}>Data is not available yet!!</h1> // Displaying a message indicating data is not available yet
        </>
      )}
    </>
  );
}

export default App; // Exporting the App component as default