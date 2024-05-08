import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  // State variables for storing data and selected post
  const [mockData, setMockData] = useState([])
  const [post, setPost] = useState(null)

  // Reference to input element
  const myInput = useRef()

  // Fetch mock data from API when component mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((result) => setMockData(result))

    // Cleanup function to reset data when component unmounts
    return () => {
      setMockData(null)
    }
  }, [])

  // Fetch specific post when input value changes
  const getPost = () => {
    const id = myInput.current.value
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((result) => setPost(result))
  }

  /*
    Function to create a new post (not used in current implementation)
  */

  // const createPost = () => {
  //   fetch('https://jsonplaceholder.typicode.com/posts', {
  //     method: 'POST',
  //     body: JSON.stringify(mockPost),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => setTestData(json))
  // }

  /*
    Function to create a new post with async/await and try/catch (not used in current implementation)
  */

  // const createPostTryCatch = async () => {
  //   try {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //       method: 'POST',
  //       body: JSON.stringify(mockPost),
  //       headers: {
  //         'Content-type': 'application/json; charset=UTF-8',
  //       },
  //     });
  //     const json = await response.json();
  //     setTestData(json);
  //   } catch (error) {
  //     console.error('Error creating post:', error);
  //   }
  // }

  // JSX rendering
  return (
    <>
      {/* Display selected post if exists */}
      {post &&
        <div className="card">
          <p>Current post title: {post.title}</p>
          <p>Current post body: {post.body}</p>
        </div>
      }
      {/* Input for entering post ID */}
      <input type="text" onInput={getPost} ref={myInput} placeholder="Enter an ID" />
      <br /><br />
      {/* Render mock data if available */}
      {mockData.length > 0 && mockData.map((data, idx) => (
        <div className="card" key={idx}>
          {data.title} <br />
          {data.body}
        </div>
      ))}
    </>
  )
}

export default App